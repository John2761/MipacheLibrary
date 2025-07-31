import { Request, Response, NextFunction } from "express";
import { AppError } from "../errors/custom.error";
import { PrismaClient } from "../../generated/prisma";
import { Decimal } from "../../generated/prisma/runtime/library";
export class ProductoController {
  prisma = new PrismaClient();

  //Get All
  get = async (request: Request, response: Response, next: NextFunction) => {
    try {
      const productos = await this.prisma.producto.findMany({
        orderBy: {
          nombre: "asc",
        },
        include: {
          imagenes: true,
          categorias: {
            include: {
              categoria: true,
            },
          },
          etiquetas: {
            include: {
              etiqueta: true,
            },
          },
          resenas: {
            include: {
              usuario: true,
            },
          },
          promocion: {
            include: {
              categorias: true,
            },
          },
        },
      });

      // Función para convertir nombre → nombre-de-archivo
      function normalizarNombre(nombre: string): string {
        return (
          nombre
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .replace(/\s+/g, "-")
            .replace(/[^a-zA-Z0-9\-]/g, "") + ".jpg"
        );
      }

      const productosConImagenYDescuento = productos.map((producto) => {
        const nombreEsperado = normalizarNombre(producto.nombre);
        const imagenPrincipal =
          producto.imagenes.find((img) => img.ruta === nombreEsperado)?.ruta ??
          "image-not-found.jpg";

        let precioDescuento: number | null = null;

        if (
          producto.promocion &&
          producto.promocion.estadoPromo === "VIGENTE"
        ) {
          const descuento = Number(producto.promocion.descuento);
          const esPorcentaje =
            producto.promocion.tipoDescuento === "PORCENTAJE";

          precioDescuento = esPorcentaje
            ? Number(producto.precio) -
              (Number(producto.precio) * descuento) / 100
            : Number(producto.precio) - descuento;

          precioDescuento = parseFloat(precioDescuento.toFixed(2));
        }
        return {
          ...producto,
          imagenPrincipal,
          precioDescuento,
        };
      });

      response.json(productosConImagenYDescuento);
    } catch (error) {
      next(error);
    }
  };

  //cambios de ultima hora
  //Obtener por Id

  getById = async (
    request: Request,
    response: Response,
    next: NextFunction
  ) => {
    try {
      let idProducto = parseInt(request.params.id);
      if (isNaN(idProducto)) {
        return next(AppError.badRequest("El ID no es válido"));
      }

      const objProducto = await this.prisma.producto.findUnique({
        where: { id: idProducto },
        include: {
          imagenes: true,
          categorias: {
            include: {
              categoria: true,
            },
          },
          etiquetas: {
            include: {
              etiqueta: true,
            },
          },
          resenas: {
            include: {
              usuario: true,
            },
          },
          promocion: true,
        },
      });

      if (!objProducto) {
        return next(AppError.notFound("No existe el producto"));
      }

      // Mapear etiquetas como arreglo plano
      const etiquetasPlano = objProducto.etiquetas.map((e) => e.etiqueta);

      // Buscar imagen principal
      const nombreEsperado =
        objProducto.nombre
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .replace(/\s+/g, "-")
          .replace(/[^a-zA-Z0-9\-]/g, "") + ".jpg";

      const imagenPrincipal =
        objProducto.imagenes.find((img) => img.ruta === nombreEsperado)?.ruta ??
        "image-not-found.jpg";

      // Calcular promedio de valoraciones
      const promedioValoracion =
        objProducto.resenas.length > 0
          ? objProducto.resenas.reduce((sum, r) => sum + r.valoracion, 0) /
            objProducto.resenas.length
          : null;

      // Calcular precio con descuento (si aplica)
      let precioFinal = new Decimal(objProducto.precio);
      let tienePromocion = false;

      if (objProducto.promocion) {
        const hoy = new Date();
        const { fechaInicio, fechaFin, tipoDescuento, descuento } =
          objProducto.promocion;

        if (hoy >= new Date(fechaInicio) && hoy <= new Date(fechaFin)) {
          tienePromocion = true;
          if (tipoDescuento === "PORCENTAJE") {
            const descuentoDecimal = precioFinal.mul(descuento).div(100);
            precioFinal = precioFinal.minus(descuentoDecimal);
          } else {
            precioFinal = precioFinal.minus(descuento);
          }

          if (precioFinal.lessThan(0)) {
            precioFinal = new Decimal(0);
          }
        }
      }

      // Enviar respuesta estructurada
      response.status(200).json({
        ...objProducto,
        etiquetas: etiquetasPlano, // ← Versión limpia de etiquetas
        imagenPrincipal,
        promedioValoracion,
        precioFinal: parseFloat(precioFinal.toFixed(2)), // ← Redondeado
        tienePromocion,
      });
    } catch (error) {
      next(error);
    }
  };

  search = async (request: Request, response: Response, next: NextFunction) => {
    try {
      //Obtener los valores del query string
      const { termino } = request.query;
      if (typeof termino !== "string" || termino.trim() === "") {
        next(AppError.badRequest("El término es requerido"));
      }
      const searchTerm: string = termino as string;
      const objProducto = await this.prisma.producto.findMany({
        where: {
          nombre: {
            contains: searchTerm,
          },
        },
        include: {
          categorias: true,
        },
      });
      if (objProducto) {
        response.status(200).json(objProducto);
      } else {
        next(AppError.notFound("No existe el Producto"));
      }
    } catch (error: any) {
      next(error);
    }
  };

  //Crear
  create = async (request: Request, response: Response, next: NextFunction) => {
    try {
      //Datos JSON
      const body = request.body;

      const nuevoproducto = await this.prisma.producto.create({
        data: {
          nombre: body.nombre,
          descripcion: body.descripcion,
          precio: body.precio,
          imagenPrincipal: body.imagenPrincipal,
        },
      });
      
      await this.prisma.productoCategoria.createMany({
        data: body.categorias.map((cat: any) => ({
          productoId: nuevoproducto.id,
          categoriaId: cat.id,
        })),
      });
      response.status(201).json(nuevoproducto);
    } catch (error) {
      next(error);
    }
  };

  //Actualizar un producto
  update = async (request: Request, response: Response, next: NextFunction) => {
    try {
      console.log("🟢 ID recibido:", request.params.id);
      console.log("📦 Body recibido:", request.body);
      const body = request.body;
      const idproducto = parseInt(request.params.id);
      //Obtener producto anterior
      const productoExistente = await this.prisma.producto.findUnique({
        where: { id: idproducto },
        include: {
          categorias: {
            select: {
              categoriaId: true,
            },
          },
        },
      });
      if (!productoExistente) {
        response.status(404).json({ message: "El producto no existe" });
        return;
      }
      // Determinar la imagen a usar (si se envía una nueva o se mantiene la existente)
      const finalImage =
        body.imagen !== undefined
          ? body.imagen
          : productoExistente.imagenPrincipal;
      // Desconectar géneros antiguos y conectar los nuevos
      const disconnectCategorias = productoExistente.categorias.map(
        (categoria: { categoriaId: number }) => ({
          productoId_categoriaId: {
            productoId: idproducto,
            categoriaId: categoria.categoriaId,
          },
        })
      );
      //Actualizar
      const updateproducto = await this.prisma.producto.update({
        where: { id: idproducto },
        data: {
          nombre: body.nombre,
          descripcion: body.descripcion,
          precio: body.precio,
          imagenPrincipal: body.imagenPrincipal,
        },
      });

      // Primero, elimina relaciones existentes
      await this.prisma.productoCategoria.deleteMany({
        where: { productoId: idproducto },
      });

      // Luego, vuelve a crearlas con los nuevos IDs
      await this.prisma.productoCategoria.createMany({
        data: body.categorias.map((cat: any) => ({
          productoId: idproducto,
          categoriaId: cat.id,
        })),
      });

      console.log(updateproducto);
      response.json(updateproducto);
    } catch (error) {
      console.error("🔥 Error en producto.update:", error);
      // ✅ Solo si no se ha respondido aún
      if (!response.headersSent) {
        next(AppError.internalServer("Error en producto.update" + error));
      }
    }
  };
}

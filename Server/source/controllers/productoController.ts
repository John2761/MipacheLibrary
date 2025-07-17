import { Request, Response, NextFunction } from "express";
import { AppError } from "../errors/custom.error";
import { PrismaClient } from "../../generated/prisma";
import { Decimal } from "@prisma/client/runtime/library";
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
        },
      });

      // 🧠 Función para convertir nombre → nombre-de-archivo
      function normalizarNombre(nombre: string): string {
        return (
          nombre
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "") // quita tildes
            .replace(/\s+/g, "-") // espacios a guiones
            .replace(/[^a-zA-Z0-9\-]/g, "") + // solo letras, números, guiones
          ".jpg"
        );
      }

      const productosConImagenPrincipal = productos.map((producto) => {
        const nombreEsperado = normalizarNombre(producto.nombre);
        console.log(
          `→ Producto: ${producto.nombre} → Esperado: ${nombreEsperado}`
        );
        const imagenPrincipal = producto.imagenes.find(
          (img) => img.ruta === nombreEsperado
        );

        return {
          ...producto,
          imagenPrincipal: imagenPrincipal?.ruta ?? "image-not-found.jpg",
        };
      });

      response.json(productosConImagenPrincipal);
    } catch (error) {
      next(error);
    }
  };

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
          include: { categoria: true }
        },
        etiquetas: {
          include: { etiqueta: true }
        },
        resenas: {
          include: { usuario: true }
        },
        promocion: true, // Asegura que se cargue la promoción
      }
    });

    if (!objProducto) {
      return next(AppError.notFound("No existe el producto"));
    }

    // Buscar imagen principal
    const nombreEsperado = objProducto.nombre
      .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
      .replace(/\s+/g, "-")
      .replace(/[^a-zA-Z0-9\-]/g, "") + ".jpg";

    const imagenPrincipal =
      objProducto.imagenes.find(img => img.ruta === nombreEsperado)?.ruta ??
      "image-not-found.jpg";

    // Calcular promedio de valoraciones
    const promedioValoracion = objProducto.resenas.length > 0
      ? objProducto.resenas.reduce((sum, r) => sum + r.valoracion, 0) / objProducto.resenas.length
      : null;

    // Calcular precio con descuento (si aplica)
    let precioFinal = new Decimal(objProducto.precio);
    let tienePromocion = false;

    if (objProducto.promocion) {
      const hoy = new Date();
      const { fechaInicio, fechaFin, tipoDescuento, descuento } = objProducto.promocion;

      if (hoy >= new Date(fechaInicio) && hoy <= new Date(fechaFin)) {
        tienePromocion = true;
        if (tipoDescuento === 'PORCENTAJE') {
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

    // Enviar respuesta
    response.status(200).json({
      ...objProducto,
      imagenPrincipal,
      promedioValoracion,
      precioFinal: parseFloat(precioFinal.toFixed(2)), // redondear
      tienePromocion
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
    } catch (error) {
      next(error);
    }
  };

  //Actualizar
  update = async (request: Request, response: Response, next: NextFunction) => {
    try {
    } catch (error) {
      next(error);
    }
  };
}

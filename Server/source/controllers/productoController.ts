import { Request, Response, NextFunction } from "express";
import { AppError } from "../errors/custom.error";
import { PrismaClient } from "../../generated/prisma";
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

      const nombreEsperado =
        objProducto.nombre
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .replace(/\s+/g, "-")
          .replace(/[^a-zA-Z0-9\-]/g, "") + ".jpg";

      const imagenPrincipal =
        objProducto.imagenes.find((img) => img.ruta === nombreEsperado)?.ruta ??
        "image-not-found.jpg";

      const promedioValoracion =
        objProducto.resenas.length > 0
          ? objProducto.resenas.reduce((sum, r) => sum + r.valoracion, 0) /
            objProducto.resenas.length
          : null;

      let precioDescuento: number | null = null;

      if (
        objProducto.promocion &&
        objProducto.promocion.estadoPromo === "VIGENTE"
      ) {
        const descuento = Number(objProducto.promocion.descuento);
        const esPorcentaje =
          objProducto.promocion.tipoDescuento === "PORCENTAJE";

        precioDescuento = esPorcentaje
          ? Number(objProducto.precio) -
            (Number(objProducto.precio) * descuento) / 100
          : Number(objProducto.precio) - descuento;

        precioDescuento = parseFloat(precioDescuento.toFixed(2));
      }

      response.status(200).json({
        ...objProducto,
        imagenPrincipal,
        promedioValoracion,
        precioDescuento,
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

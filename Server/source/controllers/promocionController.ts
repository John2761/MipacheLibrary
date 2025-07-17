import { Prisma, PrismaClient } from "../../generated/prisma";
import { Request, Response, NextFunction } from "express";
import { AppError } from "../errors/custom.error";
import { Decimal } from "../../generated/prisma/runtime/library";

export class PromocionController {
  prisma = new PrismaClient();

  // Obtener todas las promociones
  get = async (request: Request, response: Response, next: NextFunction) => {
    try {
      const promociones = await this.prisma.promocion.findMany({
        orderBy: {
          nombre: "asc",
        },
      });
      response.json(promociones);
    } catch (error) {
      next(error);
    }
  };

  // Obtener promoción por ID con productos con descuento aplicados
  getById = async (
    request: Request,
    response: Response,
    next: NextFunction
  ) => {
    try {
      const idPromocion = parseInt(request.params.id);
      if (isNaN(idPromocion)) {
        return next(AppError.badRequest("El ID no es válido"));
      }

      const objPromocion = await this.prisma.promocion.findFirst({
        where: { id: idPromocion },
        include: {
          categorias: true,
          productos: {
            include: {
              categorias: true,
            },
          },
        },
      });

      if (!objPromocion) {
        return next(AppError.notFound("No existe la promoción"));
      }

      const porcentaje = objPromocion.tipoDescuento === "PORCENTAJE";
      const descuento = Number(objPromocion.descuento);
      let productosConDescuento = [];

      // Promociones por producto directamente
      if (objPromocion.tipoPromocion === "POR_PRODUCTO") {
        productosConDescuento = objPromocion.productos.map((producto: any) => {
          const precioOriginal = Number(producto.precio);
          const precioDescuento = porcentaje
            ? precioOriginal - (precioOriginal * descuento) / 100
            : precioOriginal - descuento;

          return {
            ...producto,
            precioOriginal,
            precioDescuento: parseFloat(precioDescuento.toFixed(2)),
          };
        });
      }

      // Promociones por categoría
      if (objPromocion.tipoPromocion === "POR_CATEGORIA") {
        // Obtener productos que pertenecen a las categorías
        const productosPorCategoria = await this.prisma.producto.findMany({
          where: {
            categorias: {
              some: {
                categoriaId: {
                  in: objPromocion.categorias.map((c: { id: number }) => c.id),
                },
              },
            },
          },
        });

        productosPorCategoria.map((producto: { precio: Prisma.Decimal }) => {
          const precioOriginal = producto.precio.toNumber();

          const precioDescuento = porcentaje
            ? precioOriginal - (precioOriginal * descuento) / 100
            : precioOriginal - descuento;

          return {
            ...producto,
            precioOriginal,
            precioDescuento: parseFloat(precioDescuento.toFixed(2)),
          };
        });
      }

      response.status(200).json({
        ...objPromocion,
        productosConDescuento,
      });
    } catch (error: any) {
      next(error);
    }
  };
}

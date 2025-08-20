import { Prisma, PrismaClient } from "../../generated/prisma";
import { Request, Response, NextFunction } from "express";
import { AppError } from "../errors/custom.error";

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

  create = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const {
      nombre, descuento, fechaInicio, fechaFin,
      tipoDescuento, tipoPromocion,
      productoId, categoriaId
    } = req.body;

    // Validaciones básicas
    const hoy = new Date();
    if (new Date(fechaInicio) < hoy)
      return next(AppError.badRequest("La fecha de inicio no puede ser anterior a hoy"));
    if (new Date(fechaFin) < new Date(fechaInicio))
      return next(AppError.badRequest("La fecha de fin no puede ser anterior a la fecha de inicio"));

    const nuevaPromo = await this.prisma.promocion.create({
      data: {
        nombre,
        descuento,
        fechaInicio: new Date(fechaInicio),
        fechaFin: new Date(fechaFin),
        tipoDescuento,
        tipoPromocion,
        productos: productoId ? { connect: [{ id: productoId }] } : undefined,
        categorias: categoriaId ? { connect: [{ id: categoriaId }] } : undefined,
      }
    });

    res.status(201).json(nuevaPromo);
  } catch (error) {
    next(error);
  }
};

update = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = Number(req.params.id);
    if (isNaN(id)) return next(AppError.badRequest("ID inválido"));

    const promocionExistente = await this.prisma.promocion.findUnique({ where: { id } });
    if (!promocionExistente) return next(AppError.notFound("Promoción no encontrada"));

    const hoy = new Date();
    if (promocionExistente.fechaInicio < hoy)
      return next(AppError.badRequest("No se puede modificar una promoción ya iniciada"));

    const {
      nombre, descuento, fechaInicio, fechaFin,
      tipoDescuento, tipoPromocion,
      productoId, categoriaId
    } = req.body;

    const actualizada = await this.prisma.promocion.update({
      where: { id },
      data: {
        nombre,
        descuento,
        fechaInicio: new Date(fechaInicio),
        fechaFin: new Date(fechaFin),
        tipoDescuento,
        tipoPromocion,
        productos: productoId ? { set: [{ id: productoId }] } : { set: [] },
        categorias: categoriaId ? { set: [{ id: categoriaId }] } : { set: [] },
      },
    });

    res.json(actualizada);
  } catch (error) {
    next(error);
  }
};

}

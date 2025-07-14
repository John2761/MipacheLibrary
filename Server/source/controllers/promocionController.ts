import { Request, Response, NextFunction } from "express";
import { PrismaClient } from "../../generated/prisma";
import { AppError } from "../errors/custom.error";

export class PromocionController {
  prisma = new PrismaClient();

  //Get All
  get = async (request: Request, response: Response, next: NextFunction) => {
    try {
      const promociones = await this.prisma.promocion.findMany({
      orderBy: {
        nombre: "asc",
      },
    })
     response.json(promociones);
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
        let idPromocion = parseInt(request.params.id);
        if (isNaN(idPromocion)) {
          next(AppError.badRequest("El ID no es válido"));
        }
        const objPromocion = await this.prisma.promocion.findFirst({
          where: { id: idPromocion },
          include: {
            categorias: true,
          },
        });
        if (objPromocion) {
          response.status(200).json(objPromocion);
        } else {
          next(AppError.notFound("No existe la promocion"));
        }
      } catch (error: any) {
        next(error);
      }
    };
}
import { Request, Response, NextFunction } from "express";
import { PrismaClient } from "../../generated/prisma";

export class PersonalizadoController {
  prisma = new PrismaClient();

  //Get All
  get = async (request: Request, response: Response, next: NextFunction) => {
    try {
      const Personalizado = await this.prisma.productoPersonalizado.findMany({
        include: {
          producto: true,
        },
      });
      response.json(Personalizado);
    } catch (error) {
      next(error);
    }
  };

  //Crear
  create = async (request: Request, response: Response, next: NextFunction) => {
    try {
      //Datos JSON
      const body = request.body;

      const nuevoPersonalizado = await this.prisma.productoPersonalizado.create({
        data: {
          logo: body.logo,
          precioTotal: body.descripcion,
          color: body.color,
          tamanno: body.tamanno,
          material:body.material,
          producto: body.producto
        },
      });

      response.status(201).json(nuevoPersonalizado);
    } catch (error) {
      next(error);
    }
  };
}

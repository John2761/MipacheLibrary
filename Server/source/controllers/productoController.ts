import { Request, Response, NextFunction } from "express";
import { AppError } from "../errors/custom.error";
import { PrismaClient } from "../../generated/prisma";
export class ProductoController {
  prisma = new PrismaClient();

  //Get All
  get = async (request: Request, response: Response, next: NextFunction) => {
    try {
      const listado = await this.prisma.producto.findMany({
        orderBy: {
          nombre: "asc",
        },
        include: {
          categorias: {
            include: {
              categoria: true,
            },
          },
        },
      });
      //Respuesta
      response.json(listado);
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
        next(AppError.badRequest("El ID no es válido"));
      }
      const objProducto = await this.prisma.producto.findFirst({
        where: { id: idProducto },
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

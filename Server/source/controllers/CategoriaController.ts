import { Request, Response, NextFunction } from "express";
import { PrismaClient } from "../../generated/prisma";

export class CategoriaController {
  prisma = new PrismaClient();

  // Obtener todas las reseñas
  getAll = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const lista = await this.prisma.categoria.findMany({
        orderBy: { descripcion: 'desc' },
      });
      res.json(lista);

    } catch (error) {
      next(error);
    }
  }
}

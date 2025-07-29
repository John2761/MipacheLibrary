import { Request, Response, NextFunction } from "express";
import { PrismaClient } from "../../generated/prisma";
import { AppError } from "../errors/custom.error";

export class ResenaController {
  prisma = new PrismaClient();

  // Obtener todas las reseñas
  getAll = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const lista = await this.prisma.resena.findMany({
        orderBy: { fecha: 'desc' },
        include: {
          usuario: true,
          producto: true
        }
      });
      res.json(lista);
    } catch (error) {
      next(error);
    }
  };

  // Obtener una reseña por ID
  getById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        return next(AppError.badRequest("ID inválido"));
      }

      const resena = await this.prisma.resena.findUnique({
        where: { id },
        include: {
          usuario: true,
          producto: true
        }
      });

      if (!resena) {
        return next(AppError.notFound("No se encontró la reseña"));
      }

      res.json(resena);
    } catch (error) {
      next(error);
    }
  };

  // Crear una nueva reseña
  create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { valoracion, comentario, usuarioId, productoId } = req.body;

      if (!usuarioId || !productoId || !valoracion) {
        return next(AppError.badRequest("Datos incompletos"));
      }

      const nueva = await this.prisma.resena.create({
        data: {
          valoracion,
          comentario,
          usuarioId,
          productoId
        }
      });

      res.status(201).json(nueva);
    } catch (error) {
      next(error);
    }
  };

  // Actualizar estado de moderación
updateEstado = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = parseInt(req.params.id);
    const { moderada, observacion } = req.body;

    if (isNaN(id)) {
      return next(AppError.badRequest("ID inválido"));
    }

    const actualizada = await this.prisma.resena.update({
      where: { id },
      data: {
        moderada,
        observacion: observacion || null
      }
    });

    res.json(actualizada);
  } catch (error) {
    next(error);
  }
};

// Eliminar reseña
delete = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = parseInt(req.params.id);
    if (isNaN(id)) {
      return next(AppError.badRequest("ID inválido"));
    }

    await this.prisma.resena.delete({ where: { id } });

    res.status(204).send();
  } catch (error) {
    next(error);
  }
};


}

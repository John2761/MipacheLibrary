import { Router } from "express";
import { ResenaController } from "../controllers/resenaController";

export class ResenaRoutes {
  static get routes(): Router {
    const router = Router();
    const controller = new ResenaController();
    router.get('/', controller.getAll);          // GET todas las reseñas
    router.get('/:id', controller.getById);      // GET una reseña por ID
    router.post('/', controller.create);         // POST nueva reseña

    return router;
  }
}

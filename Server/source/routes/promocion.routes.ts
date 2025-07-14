import { Router } from "express";
import { PromocionController } from "../controllers/promocionController";

export class PromocionRoutes {
  static get routes(): Router {
    const router = Router();
    const controller = new PromocionController();
    router.get("/", controller.get);
    router.get('/:id',controller.getById) 
    return router;
  }
}
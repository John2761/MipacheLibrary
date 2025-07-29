import { Router } from "express";
import { CategoriaController } from "../controllers/CategoriaController";

export class categoriaRoutes {
  static get routes(): Router {
    const router = Router();
    const controller = new CategoriaController();
    router.get("/", controller.getAll);
    
    return router;
  }
}
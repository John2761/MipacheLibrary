import { Router } from "express";
import { PersonalizadoController } from "../controllers/personalizadoController";

export class PersonalizadoRoutes {
  static get routes(): Router {
    const router = Router();
    const controller = new PersonalizadoController();
    //localhost:3000/personalizado
    router.get("/", controller.get);
    //Crear personalizado
    router.post('/',controller.create)

    return router;
  }
}

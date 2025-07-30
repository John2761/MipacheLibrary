import { Router } from "express";
import { ProductoController } from "../controllers/productoController";

export class ProductoRoutes {
  static get routes(): Router {
    const router = Router();
    const controller = new ProductoController();
    //localhost:3000/producto
    router.get("/", controller.get);
    //localhost:3000/producto/6
    router.get('/:id',controller.getById)  
    //Crear producto
    router.post('/',controller.create)
    //Actualizar producto
    router.put('/:id', controller.update)

    return router;

  }
}

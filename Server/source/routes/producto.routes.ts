import { Router } from "express";
import { ProductoController } from "../controllers/productoController";

export class ProductoRoutes {
  static get routes(): Router {
    const router = Router();
    const controller = new ProductoController();
    router.get("/", controller.get);
    //localhost:3000/videojuego/search?termino=er
    //router.get('/search',controller.search) 
    //localhost:3000/videojuego/6
    router.get('/:id',controller.getById)  
        

    return router;
  }
}

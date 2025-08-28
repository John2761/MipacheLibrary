import { Router } from "express";
import { ProductoController } from "../controllers/productoController";
import { authenticateJWT, authorizeRoles } from "../middleware/authMiddleware";
import { Role } from "../../generated/prisma";

export class ProductoRoutes {
  static get routes(): Router {
    const router = Router();
    const controller = new ProductoController();
    //localhost:3000/producto
    router.get("/", controller.get);
    //localhost:3000/producto/6
    //router.get('/:id',controller.getById)
    
    router.get('/:id',
      authenticateJWT,
      authorizeRoles(Role.ADMIN),
      controller.getById
    );
    //Crear producto
    router.post('/',controller.create)
    //Actualizar producto
    router.put('/:id', controller.update)
    // PATCH parcial
    router.patch('/:id/activo', controller.setActivo); 
    return router;

  }
}

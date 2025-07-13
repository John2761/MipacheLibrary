import { Router } from "express";
import { ProductoRoutes } from "./producto.routes";
import { PedidoRoutes } from "./pedido.routes";
import { PromocionRoutes } from "./promocion.routes";

export class AppRoutes {
  static get routes(): Router {
    const router = Router();
    
    // ----Agregar las rutas----
    router.use('/producto', ProductoRoutes.routes);
    router.use('/promocion', PromocionRoutes.routes)
    router.use('/pedido', PedidoRoutes.routes);
    
    return router;
  }
}

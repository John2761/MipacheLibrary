import { Router } from "express";
import { PedidoController } from "../controllers/pedidoController";
import { authenticateJWT } from "../middleware/authMiddleware";

export class PedidoRoutes {
  static get routes(): Router {
    const router = Router();
    const controller = new PedidoController();
    router.get("/", controller.get);
    router.get("/:id", controller.getById);
    router.post("/", controller.create);
    router.put("/:id", controller.update);

    // Carrito de compras (con autenticación JWT)
    router.get("/carrito/:usuarioId", authenticateJWT,controller.getCartByUser);
    router.post("/:id/producto", authenticateJWT, controller.addProductToCart);
    router.delete("/:id/producto/:productoId",authenticateJWT,controller.removeProductFromCart);
    router.delete("/:id", authenticateJWT, controller.deletePedido);

    return router;
  }
}

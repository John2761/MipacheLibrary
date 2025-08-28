// pedido.routes.ts
import { Router } from "express";
import { PedidoController } from "../controllers/pedidoController";
import passport from "passport";
export const authenticateJWT = passport.authenticate("jwt", { session: false });

export class PedidoRoutes {
  static get routes(): Router {
    const router = Router();
    const controller = new PedidoController();

    //router.get("/mis-pedidos", authenticateJWT, controller.getMisPedidos);
    router.get("/pedido-admin", controller.get);
    router.get("/:id", controller.getById);
    router.get("/", controller.get);
    router.post("/", controller.create);

    return router;
  }
}

import { Router } from "express";
import { ProductoRoutes } from "./producto.routes";
import { PedidoRoutes } from "./pedido.routes";
import { PromocionRoutes } from "./promocion.routes";
import { ResenaRoutes } from "./resena.routes";
import { categoriaRoutes } from "./categoria.routes";
import { ImageRoutes } from "./image.routes";
import { PersonalizadoRoutes } from "./personalizado.routes";
import precioColorRoutes from "./precioColor.routes";
import precioMaterialRoutes from "./precioMaterial.routes";
import precioTamannoRoutes from "./precioTamanno.routes";
import { dashboardRoutes } from "./dashboard.routes";

export class AppRoutes {
  static get routes(): Router {
    const router = Router();
    // ----Agregar las rutas----
    router.use("/producto", ProductoRoutes.routes);
    router.use("/promocion", PromocionRoutes.routes);
    router.use("/pedido", PedidoRoutes.routes);
    router.use("/resena", ResenaRoutes.routes);
    router.use("/images", ImageRoutes.routes);
    router.use("/categoria", categoriaRoutes.routes);
    router.use("/personalizado", PersonalizadoRoutes.routes);
    router.use("/precioColor", precioColorRoutes);
    router.use("/precioMaterial", precioMaterialRoutes);
    router.use("/precioTamanno", precioTamannoRoutes);
    router.use("/dashboard",  dashboardRoutes.routes); /* isAdmin, */

    return router;
  }
}

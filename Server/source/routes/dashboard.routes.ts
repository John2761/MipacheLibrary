// source/routes/dashboard.ts
import { Router } from "express";
import { getDashboardSummary } from "../controllers/dashboardController";
const router = Router();

export class dashboardRoutes {
  static get routes(): Router {
    // (más abajo te dejo un middleware isAdmin opcional)
    router.get("/summary", getDashboardSummary);

    return router;
  }
}

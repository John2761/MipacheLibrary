import { Router } from "express";
import { PrismaClient } from "../../generated/prisma";

const prisma = new PrismaClient();
const router = Router();

// GET /precioColor
router.get("/", async (_req, res, next) => {
  try {
    const data = await prisma.precioColor.findMany({ orderBy: { nombre: "asc" } });
    res.json(data);
  } catch (e) { next(e); }
});

export default router;

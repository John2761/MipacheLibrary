// source/middlewares/isAdmin.ts
import { Request, Response, NextFunction } from "express";

export function isAdmin(req: Request, res: Response, next: NextFunction) {
  // Asume que previamente un middleware setea req.user con el payload del JWT
  const user: any = (req as any).user;
  if (!user?.role || user.role !== 'ADMIN') {
    return res.status(403).json({ message: "Acceso restringido a administradores" });
  }
  next();
}

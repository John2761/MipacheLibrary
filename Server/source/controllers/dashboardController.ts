import { Request, Response, NextFunction } from "express";
import { Prisma, PrismaClient } from "../../generated/prisma";

const prisma = new PrismaClient();

const baseFromReq = (req: Request) =>
  process.env.STATIC_BASE_URL ?? `${req.protocol}://${req.get("host")}`;
const withImgUrl = (req: Request, ruta: string | null) =>
  ruta ? `${baseFromReq(req)}/assets/images/${ruta}` : null;

export const getDashboardSummary = async (
  req: Request,
  res: Response,
  _next: NextFunction
) => {
  const errors: { section: string; message: string }[] = [];

  const jsonReplacer = (_: string, v: any) => {
    if (typeof v === "bigint") return v.toString();
    if (v instanceof Prisma.Decimal) return Number(v);
    return v;
  };
  const sendJSON = (res: Response, payload: any, status = 200) => {
    res.status(status);
    res.setHeader("Content-Type", "application/json; charset=utf-8");
    res.end(JSON.stringify(payload, jsonReplacer));
  };

  // ---------- Ventas por día (últimos 60) ----------
  let ventasPorDia: { fecha: string; ventas: number }[] = [];
  try {
    ventasPorDia = await prisma.$queryRaw<{ fecha: string; ventas: number }[]>`
      SELECT DATE(p.fechaPedido) AS fecha, COUNT(*) AS ventas
      FROM Pedido p
      WHERE p.estado IN ('PAGADO','COMPLETADO')
        AND p.fechaPedido >= DATE_SUB(CURDATE(), INTERVAL 60 DAY)
      GROUP BY DATE(p.fechaPedido)
      ORDER BY fecha ASC
    `;
  } catch (e: any) {
    console.error("ventasPorDia error:", e);
    errors.push({ section: "ventasPorDia", message: e?.message ?? String(e) });
  }

  // ---------- Ventas por mes (últimos 12 meses) ----------
  let ventasPorMes: { anio: number; mes: number; ventas: number }[] = [];
  try {
    ventasPorMes = await prisma.$queryRaw<
      { anio: number; mes: number; ventas: number }[]
    >`
      SELECT YEAR(p.fechaPedido) AS anio, MONTH(p.fechaPedido) AS mes, COUNT(*) AS ventas
      FROM Pedido p
      WHERE p.estado IN ('PAGADO','COMPLETADO')
        AND p.fechaPedido >= DATE_SUB(CURDATE(), INTERVAL 365 DAY)
      GROUP BY YEAR(p.fechaPedido), MONTH(p.fechaPedido)
      ORDER BY anio, mes
    `;
  } catch (e: any) {
    console.error("ventasPorMes error:", e);
    errors.push({ section: "ventasPorMes", message: e?.message ?? String(e) });
  }

  // ---------- Pedidos por estado ----------
  // Pedidos por estado
  const pedidosPorEstado = await prisma.pedido.groupBy({
    by: ["estado"],
    _count: { _all: true },
  });

  // ---------- Top 3 productos ----------
  type TopGroup = { productoId: number; _sum: { cantidad: number | null } };
  let top3Productos: any[] = [];
  try {
    const topAgrupadoRaw = await prisma.pedidoProducto.groupBy({
      by: ["productoId"],
      _sum: { cantidad: true },
      orderBy: [{ _sum: { cantidad: "desc" } }],
      take: 3,
    });
    const topAgrupado = topAgrupadoRaw as TopGroup[];
    const topIds = topAgrupado.map((t) => t.productoId);

    type ProductoLite = {
      id: number;
      nombre: string;
      imagenPrincipal: string | null;
      precio: Prisma.Decimal;
    };

    const productos = (
      topIds.length
        ? await prisma.producto.findMany({
            where: { id: { in: topIds } },
            select: {
              id: true,
              nombre: true,
              imagenPrincipal: true,
              precio: true,
            },
          })
        : []
    ) as ProductoLite[];

    top3Productos = topAgrupado.map((t) => {
      const prod = productos.find((p) => p.id === t.productoId);
      return {
        productoId: t.productoId,
        cantidadVendida: Number(t._sum.cantidad ?? 0),
        id: prod?.id ?? null,
        nombre: prod?.nombre ?? null,
        precio: prod ? Number(prod.precio) : null,
      };
    });
  } catch (e: any) {
    console.error("top3Productos error:", e);
    errors.push({ section: "top3Productos", message: e?.message ?? String(e) });
  }

  // ---------- Últimas 3 reseñas (si existe el modelo) ----------
  let ultimasResenas: any[] = [];
  try {
    // @ts-ignore – algunos clientes pueden no tener el modelo si no migraste
    if (prisma.resena?.findMany) {
      // @ts-ignore
      const rs = await prisma.resena.findMany({
        take: 3,
        orderBy: { fecha: "desc" },
        select: {
          id: true,
          comentario: true,
          valoracion: true,
          fecha: true,
          usuario: { select: { nombre: true } },
          producto: { select: { nombre: true, imagenPrincipal: true } },
        },
      });
      ultimasResenas = rs.map((r: any) => ({
        ...r,
        producto: {
          ...r.producto,
          imagenPrincipal: withImgUrl(req, r.producto?.imagenPrincipal ?? null),
        },
      }));
    } else {
      console.warn(
        "Modelo Resena no encontrado en Prisma. Saltando bloque reseñas."
      );
    }
  } catch (e: any) {
    console.error("reseñas error:", e);
    errors.push({
      section: "ultimasResenas",
      message: e?.message ?? String(e),
    });
  }

  sendJSON(res, {
    ventasPorDia,
    ventasPorMes,
    pedidosPorEstado,
    top3Productos,
    ultimasResenas,
    errors,
  });
};

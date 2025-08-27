import { Request, Response, NextFunction } from "express";
import { AppError } from "../errors/custom.error";
import { PrismaClient } from "../../generated/prisma";
export class PedidoController {
  prisma = new PrismaClient();

  //Get All
  get = async (request: Request, response: Response, next: NextFunction) => {
    try {
      const pedidos = await this.prisma.pedido.findMany({
        include: {
          usuario: true,
          productos: true,
        },
        orderBy: {
          fechaPedido: "desc",
        },
      });

      const pedidosFormateados = pedidos.map((pedido) => ({
        id: pedido.id,
        fecha: pedido.fechaPedido,
        estado: pedido.estado,
        cliente: pedido.usuario.nombre,
        cantidadProductos: pedido.productos.length,
      }));

      response.status(200).json(pedidosFormateados);
    } catch (error) {
      next(error);
    }
  };

  // Obtener por ID
  // Obtener por ID (versión alineada a PedidoProducto)
  // PedidoController.ts
  getById = async (req: Request, res: Response, next: NextFunction) => {
    const IVA_RATE = 0.13;
    const round2 = (n: number) => Math.round(n * 100) / 100;

     try {
    const id = Number(req.params.id);
    if (isNaN(id)) return next(AppError.badRequest("ID inválido"));

    const pedido = await this.prisma.pedido.findUnique({
      where: { id },
      include: {
        usuario: { select: { nombre: true } },
        productos: {
          include: {
            producto: { select: { nombre: true, descripcion: true } },
            personalizado: { include: { color: true, material: true, tamanno: true } }
          }
        }
      }
    });
    if (!pedido) return next(AppError.notFound("Pedido no encontrado"));

    const lineas = pedido.productos.map((l) => {
      const cantidad = l.cantidad;

      // 1) BRUTO de la línea (preferimos tomarlo del total guardado; si no, lo calculamos)
      const totalBrutoLinea = l.total
        ? round2(Number(l.total))
        : round2(Number(l.precioUnitario) * cantidad +
                 (l.personalizado ?? []).reduce((s, p) => s + Number(p.precioTotal || 0), 0));

      // 2) NETO de la línea (una sola división y redondeo al final)
      const subtotalNetoLinea = round2(totalBrutoLinea / (1 + IVA_RATE));

      // 3) IVA de la línea como diferencia
      const ivaLinea = round2(totalBrutoLinea - subtotalNetoLinea);

      // 4) Precio Unitario NETO sólo para mostrar (no para calcular)
      const unitarioNetoMostrar = round2(subtotalNetoLinea / cantidad);

      return {
        nombre: l.producto.nombre,
        descripcion: l.producto.descripcion,
        cantidad,
        precioUnitario: unitarioNetoMostrar, // mostrado como "sin IVA"
        subtotal: subtotalNetoLinea,          // neto de la línea
        impuestos: ivaLinea,                  // monto de IVA
        total: totalBrutoLinea,               // bruto de la línea
        personalizados: (l.personalizado ?? []).map((p) => ({
          logo: p.logo ? "A color" : "Blanco y negro",
          color: p.color.nombre,
          material: p.material.nombre,
          tamanno: p.tamanno.nombre,
          precioTotal: Number(p.precioTotal),
        })),
      };
    });

    // Totales coherentes (suma de líneas ya redondeadas)
    const subtotal = round2(lineas.reduce((s, x) => s + x.subtotal, 0));
    const impuestos = round2(lineas.reduce((s, x) => s + x.impuestos, 0));
    const total = round2(lineas.reduce((s, x) => s + x.total, 0));

    res.status(200).json({
      pedido: { id: pedido.id, fecha: pedido.fechaPedido, estado: pedido.estado },
      cliente: { nombre: pedido.usuario.nombre, direccion: "No registrada" },
      productos: lineas,
      resumen: { subtotal, impuestos, total },
      metodoPago: "Tarjeta de crédito/débito",
    });
    } catch (err) {
      next(err);
    }
  };

  //Crear
  // PedidoController.ts
  create = async (req: Request, res: Response, next: NextFunction) => {
    const IVA_RATE = 0.13;
    const round2 = (n: number) => Math.round(n * 100) / 100;

    const netFromGross = (gross: number) => round2(gross / (1 + IVA_RATE)); // precio sin IVA
    const taxFromGross = (gross: number) => round2(gross - netFromGross(gross)); // impuestos incluidos en un precio bruto

    try {
      const { usuarioId, productos, estado } = req.body;
      if (!usuarioId || !Array.isArray(productos) || productos.length === 0) {
        return next(
          AppError.badRequest("Datos incompletos para crear el pedido")
        );
      }

      const nuevoPedido = await this.prisma.pedido.create({
        data: {
          usuarioId,
          estado,
          productos: {
            create: productos.map((p: any) => {
              const cantidad = Number(p.cantidad);

              // p.precioUnitario puede venir BRUTO (con IVA) desde el front
              const precioUnitarioBruto = Number(p.precioUnitario);
              const precioUnitarioNeto = netFromGross(precioUnitarioBruto); // << usamos neto para factura

              const montoPerso = Array.isArray(p.personalizados)
                ? p.personalizados.reduce(
                    (s: number, it: any) => s + Number(it.precioTotal || 0),
                    0
                  )
                : 0;

              const subtotal = round2(
                precioUnitarioNeto * cantidad + montoPerso
              );
              const impuestos = round2(subtotal * IVA_RATE);
              const total = round2(subtotal + impuestos);

              return {
                productoId: p.productoId,
                cantidad,
                // Guardamos el unitario NETO para que el detail muestre “precio - impuestos”
                precioUnitario: precioUnitarioNeto,
                subtotal,
                impuestos, // MONTO
                total,
                personalizado: p.personalizados?.length
                  ? {
                      create: p.personalizados.map((perso: any) => ({
                        logo: perso.logo,
                        precioTotal: Number(perso.precioTotal),
                        colorId: perso.colorId,
                        materialId: perso.materialId,
                        tamannoId: perso.tamannoId,
                      })),
                    }
                  : undefined,
              };
            }),
          },
        },
        include: {
          productos: {
            include: {
              producto: true,
              personalizado: {
                include: { color: true, material: true, tamanno: true },
              },
            },
          },
          usuario: true,
        },
      });

      res.status(201).json(nuevoPedido);
    } catch (error) {
      next(error);
    }
  };

  //Actualizar
  update = async (request: Request, response: Response, next: NextFunction) => {
    try {
      const idPedido = parseInt(request.params.id);
      const { estado, actualizadoPorId } = request.body;

      // Validaciones básicas
      if (isNaN(idPedido)) {
        return next(AppError.badRequest("ID de pedido inválido"));
      }

      const estadosValidos = [
        "EN_CARRITO",
        "PAGADO",
        "EN_ENTREGA",
        "COMPLETADO",
      ];
      if (!estado || !estadosValidos.includes(estado)) {
        return next(AppError.badRequest("Estado inválido"));
      }

      if (!actualizadoPorId || isNaN(actualizadoPorId)) {
        return next(
          AppError.badRequest("ID del usuario que actualiza es inválido")
        );
      }

      // Verificar que el pedido exista
      const pedidoExistente = await this.prisma.pedido.findUnique({
        where: { id: idPedido },
      });

      if (!pedidoExistente) {
        return next(AppError.notFound("Pedido no encontrado"));
      }

      // Verificar que el usuario exista
      const usuario = await this.prisma.usuario.findUnique({
        where: { id: actualizadoPorId },
      });

      if (!usuario) {
        return next(AppError.notFound("Usuario que actualiza no encontrado"));
      }

      // 1. Actualizar el estado del pedido
      const pedidoActualizado = await this.prisma.pedido.update({
        where: { id: idPedido },
        data: { estado },
      });

      // 2. Registrar el cambio en el historial
      await this.prisma.historialPedidos.create({
        data: {
          estado,
          pedidoId: idPedido,
          actualizadoPorId,
        },
      });

      // 3. Responder al cliente
      response.status(200).json({
        mensaje: "Estado del pedido actualizado y registrado en historial",
        pedido: pedidoActualizado,
      });
    } catch (error) {
      next(error);
    }
  };

  // Obtener el carrito activo por usuario
getCartByUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const usuarioId = Number(req.params.usuarioId);
  if (isNaN(usuarioId)) return next(AppError.badRequest("ID de usuario inválido"));

  try {
    const pedido = await this.prisma.pedido.findFirst({
      where: {
        usuarioId,
        estado: "EN_CARRITO"
      },
      include: {
        productos: {
          include: {
            producto: true,
            personalizado: {
              include: {
                color: true,
                material: true,
                tamanno: true
              }
            }
          }
        }
      }
    });

    if (!pedido) res.status(404).json({ mensaje: "No hay carrito activo para este usuario" });
    res.status(200).json(pedido);
  } catch (error) {
    next(error);
  }
};

// Agregar producto al carrito existente
addProductToCart = async (req: Request, res: Response, next: NextFunction) => {
  const pedidoId = Number(req.params.id);
  const { productoId, cantidad, precioUnitario, personalizados } = req.body;

  try {
    const productoAgregado = await this.prisma.pedidoProducto.create({
      data: {
        pedidoId,
        productoId,
        cantidad,
        precioUnitario,
        subtotal: cantidad * precioUnitario,
        impuestos: (cantidad * precioUnitario) * 0.13,
        total: (cantidad * precioUnitario) * 1.13,
        personalizado: personalizados?.length
          ? {
              create: personalizados.map((perso: any) => ({
                logo: perso.logo,
                precioTotal: Number(perso.precioTotal),
                colorId: perso.colorId,
                materialId: perso.materialId,
                tamannoId: perso.tamannoId,
              }))
            }
          : undefined
      },
      include: {
        producto: true,
        personalizado: {
          include: { color: true, material: true, tamanno: true }
        }
      }
    });

    res.status(201).json(productoAgregado);
  } catch (error) {
    next(error);
  }
};

// Eliminar un producto del carrito
removeProductFromCart = async (req: Request, res: Response, next: NextFunction) => {
  const pedidoId = Number(req.params.id);
  const productoId = Number(req.params.productoId);

  try {
    await this.prisma.pedidoProducto.deleteMany({
      where: {
        pedidoId,
        productoId
      }
    });

    res.status(200).json({ mensaje: "Producto eliminado del carrito" });
  } catch (error) {
    next(error);
  }
};

// Eliminar pedido completo (carrito)
deletePedido = async (req: Request, res: Response, next: NextFunction) => {
  const id = Number(req.params.id);

  try {
    // Eliminar productos personalizados primero (si hay)
    await this.prisma.pedidoProducto.deleteMany({ where: { pedidoId: id } });
    await this.prisma.pedido.delete({ where: { id } });

    res.status(200).json({ mensaje: "Pedido (carrito) eliminado correctamente" });
  } catch (error) {
    next(error);
  }
};
}

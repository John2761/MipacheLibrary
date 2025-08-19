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
        fechaPedido: 'desc',
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
getById = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  try {
    const idPedido = parseInt(request.params.id);
    if (isNaN(idPedido)) {
      return next(AppError.badRequest("ID inválido"));
    }

    const pedido = await this.prisma.pedido.findUnique({
      where: { id: idPedido },
      include: {
        usuario: {
          select: {
            nombre: true,
            // Si luego agregás 'direccion' al modelo, la podés incluir aquí
          },
        },
        productos: {
          include: {
            producto: {
              select: {
                nombre: true,
                descripcion: true,
                precio: true,
              },
            },
            personalizado: {
              include: {
                color: {
                  select: { nombre: true },
                },
                material: {
                  select: { nombre: true },
                },
                tamanno: {
                  select: { nombre: true },
                },
              },
            },
          },
        },
      },
    });

    if (!pedido) {
      return next(AppError.notFound("Pedido no encontrado"));
    }

    // Calcular totales
    const subtotal = pedido.productos.reduce(
      (sum, p) => sum + Number(p.subtotal),
      0
    );
    const impuestos = pedido.productos.reduce(
      (sum, p) => sum + Number(p.total) - Number(p.subtotal),
      0
    );
    const total = pedido.productos.reduce(
      (sum, p) => sum + Number(p.total),
      0
    );

    // Respuesta estructurada
    response.status(200).json({
      pedido: {
        id: pedido.id,
        fecha: pedido.fechaPedido,
        estado: pedido.estado,
      },
      cliente: {
        nombre: pedido.usuario.nombre,
        direccion: "No registrada", // temporal, si luego agregás este campo al modelo se reemplaza
      },
      productos: pedido.productos.map((p) => ({
        nombre: p.producto.nombre,
        descripcion: p.producto.descripcion,
        cantidad: p.cantidad,
        precioUnitario: Number(p.precioUnitario),
        subtotal: Number(p.subtotal),
        total: Number(p.total),
        personalizados: p.personalizado.map((perso) => ({
          logo: perso.logo ? "A color" : "Blanco y negro",
          color: perso.color.nombre,
          material: perso.material.nombre,
          tamanno: perso.tamanno.nombre,
          precioTotal: Number(perso.precioTotal),
        })),
      })),
      resumen: {
        subtotal,
        impuestos,
        total,
      },
      metodoPago: "Tarjeta de crédito/débito", // Cambiar según tu lógica real
    });
  } catch (error) {
    next(error);
  }
};


  //Crear
  create = async (request: Request, response: Response, next: NextFunction) => {
    try {
    const { usuarioId, productos, estado } = request.body;

    if (!usuarioId || !Array.isArray(productos) || productos.length === 0) {
      return next(AppError.badRequest("Datos incompletos para crear el pedido"));
    }

    const nuevoPedido = await this.prisma.pedido.create({
      data: {
        usuarioId,
        estado,
        productos: {
          create: productos.map((p: any) => ({
            productoId: p.productoId,
            cantidad: p.cantidad,
            precioUnitario: p.precioUnitario,
            subtotal: p.subtotal,
            impuestos: p.impuestos,
            total: p.total,
            personalizado: p.personalizados && p.personalizados.length > 0? {
              create: p.personalizados.map((perso: any) => ({
                logo: perso.logo,
                precioTotal: perso.precioTotal,
                colorId: perso.colorId,
                materialId: perso.materialId,
                tamannoId: perso.tamannoId,
              })),
            }
            : undefined,
          })),
        },
      },
      include: {
        productos: {
          include: {
            producto: true,
            personalizado: {
              include: {
                color: true,
                material: true,
                tamanno: true,
              },
            },
          },
        },
        usuario: true,
      },
    });

    response.status(201).json(nuevoPedido);
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

    const estadosValidos = ["EN_CARRITO", "PAGADO", "EN_ENTREGA", "COMPLETADO"];
    if (!estado || !estadosValidos.includes(estado)) {
      return next(AppError.badRequest("Estado inválido"));
    }

    if (!actualizadoPorId || isNaN(actualizadoPorId)) {
      return next(AppError.badRequest("ID del usuario que actualiza es inválido"));
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

}

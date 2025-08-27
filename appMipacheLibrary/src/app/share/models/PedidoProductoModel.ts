import { PedidoModel } from "./PedidoModel";
import { ProductoModel } from "./ProductoModel";

export interface PedidoProductoModel {
  ordenId: number;
  pedido: PedidoModel;
  pedidoId: number;
  producto: ProductoModel;
  productoId: number;
  cantidad: number;
  precio: number;
  updatedAt: Date;
}
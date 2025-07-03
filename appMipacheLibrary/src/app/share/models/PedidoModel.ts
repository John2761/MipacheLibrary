import { PedidoProductoModel } from "./PedidoProductoModel";
import { UsuarioModel } from "./UsuarioModel";

export interface PedidoModel {
    id: number;
    fechaPedido: Date;
    usuarioId: number;
    usuario: UsuarioModel;
    videojuegos: PedidoProductoModel[];
  }
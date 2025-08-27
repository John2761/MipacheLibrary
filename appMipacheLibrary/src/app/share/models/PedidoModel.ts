import { PedidoProductoModel } from "./PedidoProductoModel";
import { PersonalizadoModel } from "./PersonalizadoModel";
import { UsuarioModel } from "./UsuarioModel";

export interface PedidoModel {
    id: number;
    fecha: Date;
    cliente: UsuarioModel;
    clienteId: number;
    estado: string
    productos: PedidoProductoModel[]; // ← productos normales
    productosPersonalizados: PersonalizadoModel[]; // ← productos personalizados
  }
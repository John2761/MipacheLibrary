import { EstadoModel } from "./EnumModel";
import { PedidoProductoModel } from "./PedidoProductoModel";
import { UsuarioModel } from "./UsuarioModel";

export interface PedidoModel {
    id: number;
    fecha: Date;
    cliente: string;
    estado: string
    productos: number;
    
  }
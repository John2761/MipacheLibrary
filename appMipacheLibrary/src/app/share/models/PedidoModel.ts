
import { PedidoProductoModel } from "./PedidoProductoModel";
import { PersonalizadoModel } from "./PersonalizadoModel";


export interface PedidoModel {
    id: number;
    fecha: Date;
    cliente: string;
    estado: string
    productos: PedidoProductoModel[]; // ← productos normales
    productosPersonalizados: PersonalizadoModel[]; // ← productos personalizados
  }
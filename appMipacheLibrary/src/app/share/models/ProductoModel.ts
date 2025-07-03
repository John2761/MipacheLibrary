import { CategoriaModel } from "./CategoriaModel";
import { PedidoProductoModel } from "./PedidoProductoModel";

export interface ProductoModel {
    id: number;
    nombre: string;
    descripcion: string;
    precio: number; // Puede usarse number en lugar de Decimal
    imagen: string;
    autor: string,
    createdAt: Date;
    updatedAt: Date;
    categorias: CategoriaModel[];
    pedidos: PedidoProductoModel[];
  }
import { ProductoModel } from "./ProductoModel";

export interface CategoriaModel {
  id: number;
  nombre: string;
  updatedAt: Date;
  productos: ProductoModel[];
}
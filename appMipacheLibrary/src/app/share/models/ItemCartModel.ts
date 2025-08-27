import { ProductoModel } from "./ProductoModel";


export interface ItemCartModel {

    producto: ProductoModel;
    cantidad: number;
    subtotal: number;
  }
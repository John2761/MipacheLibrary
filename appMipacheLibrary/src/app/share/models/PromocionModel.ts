import { CategoriaModel } from "./CategoriaModel";
import { EstadoPromoModel, TipoDescuento } from "./EnumModel";
import { ProductoModel } from "./ProductoModel";

export interface PromocionModel {
    id: number;
    nombre: String,
    descuento: number,
    fechaInicio: Date,
    fechaFin: Date,
    tipoDescuento: TipoDescuento,
    estadoPromo: EstadoPromoModel;
    categorias: CategoriaModel[],
    productos: ProductoModel[],
    
  }
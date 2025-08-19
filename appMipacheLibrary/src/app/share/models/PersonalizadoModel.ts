import { PrecioColorModel, PrecioMaterialModel, PrecioTamannoModel } from "./PreciosModel";

export interface PersonalizadoModel {
    id: number;
    logo: boolean;
    precioTotal: number; // Puede usarse number en lugar de Decimal

    precioColor: PrecioColorModel;
    precioTamanno: PrecioTamannoModel;
    precioMaterial: PrecioMaterialModel;
  }
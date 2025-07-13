//import {EstadoPromo} from "../../generated/prisma";

import { TipoDescuento } from "../../generated/prisma";
export const promociones = [
  {
    nombre: 'Descuento Verano',
    descuento: 10,
    tipoDescuento: TipoDescuento.PORCENTAJE,
    fechaInicio: '2025-07-01T00:00:00.000Z',
    fechaFin: '2025-07-31T00:00:00.000Z'
  },
  {
    nombre: 'Promo Junio',
    descuento: 3000,
    tipoDescuento: TipoDescuento.MONTO_FIJO,
    fechaInicio: '2025-06-01T00:00:00.000Z',
    fechaFin: '2025-06-30T00:00:00.000Z'
  },
  {
    nombre: 'Agosto Especial',
    descuento: 15,
    tipoDescuento: TipoDescuento.PORCENTAJE,
    fechaInicio: '2025-08-01T00:00:00.000Z',
    fechaFin: '2025-08-15T00:00:00.000Z'
  },

  // {
  //   nombre: 'Preventa',
  //   descuento: 15,
  //   tipoDescuento: TipoDescuento.PORCENTAJE,
  //   fechaInicio: '2025-06-27T00:00:00.000Z',
  //   fechaFin: '2025-07-05T00:00:00.000Z'
  // }
];
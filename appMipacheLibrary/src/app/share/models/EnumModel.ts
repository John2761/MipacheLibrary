export enum RoleModel {
  USER = 'USER',
  ADMIN = 'ADMIN',
}

export enum EstadoPromoModel {
  PENDIENTE = 'PENDIENTE',
  VIGENTE   = 'VIGENTE',
  APLICADA  = 'APLICADA',
}

export enum EstadoModel {
  EN_CARRITO = 'EN_CARRITO',
  PAGO_PENDIENTE  = 'PAGO_PENDIENTE',
  PAGADO     = 'PAGADO',
  EN_ENTREGA = 'EN_ENTREGA',
  COMPLETADO = 'COMPLETADO',
}

export enum TipoDescuento {
  PORCENTAJE = 'PORCENTAJE',
  MONTO_FIJO = 'MONTO_FIJO',
}

export enum TipoPromocion {
  POR_CATEGORIA = 'POR_CATEGORIA',
  POR_PRODUCTO  = 'POR_PRODUCTO',
}
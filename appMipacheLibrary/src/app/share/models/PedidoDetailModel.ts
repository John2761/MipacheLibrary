// src/app/share/models/PedidoDetailModel.ts
export interface PedidoDetailModel {
  pedido: { id: number; fecha: string | Date; estado: string; };
  cliente: { nombre: string; direccion: string; };
  productos: {
    nombre: string;
    descripcion: string;
    cantidad: number;
    precioUnitario: number;
    subtotal: number;
    impuestos: number; // monto por línea
    total: number;
    personalizados?: {
      logo: string;        // "A color" | "Blanco y negro"
      color: string;
      material: string;
      tamanno: string;
      precioTotal: number;
    }[];
  }[];
  resumen: { subtotal: number; impuestos: number; total: number; };
  metodoPago: string;
}

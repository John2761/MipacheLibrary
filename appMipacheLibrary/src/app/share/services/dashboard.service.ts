// src/app/share/services/dashboard.service.ts
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';

export interface VentasDia { fecha: string; ventas: number; }
export interface VentasMes { anio: number; mes: number; ventas: number; }
export interface PedidosEstado { estado: string; _count: { _all: number }; }
export interface TopProducto {
  productoId: number;
  cantidadVendida: number;
  id?: number;
  nombre?: string;
  imagenPrincipal?: string;
  precio?: number;
}
export interface ResenaLite {
  id: number;
  comentario: string | null;
  valoracion: number;
  fecha: string;
  usuario: { nombre: string };
  producto: { nombre: string; imagenPrincipal?: string };
}
export interface DashboardDTO {
  ventasPorDia: VentasDia[];
  ventasPorMes: VentasMes[];
  pedidosPorEstado: PedidosEstado[];
  top3Productos: TopProducto[];
  ultimasResenas: ResenaLite[];
}

@Injectable({ providedIn: 'root' })
export class DashboardService {
  private base = `${environment.apiURL}/dashboard`; 
  constructor(private http: HttpClient) {}
  getSummary() { return this.http.get<DashboardDTO>(`${this.base}/summary`); }
}

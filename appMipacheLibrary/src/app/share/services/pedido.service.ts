import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { PedidoModel } from '../models/PedidoModel';

@Injectable({
  providedIn: 'root',
})
export class PedidoService {
  private baseUrl = 'http://localhost:3000/pedido'; // Ajustá según backend
  private totalCantidadSubject = new BehaviorSubject<number>(0);
  totalCantidad$ = this.totalCantidadSubject.asObservable();

  constructor(private http: HttpClient) {}

  getPedidos(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }

  getPedidoById(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${id}`);
  }

  crearPedido(pedido: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}`, pedido);
  }

  actualizarPedido(id: number, data: any): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/${id}`, data);
  }

  // pedido.service.ts (fragmento)
  actualizarCantidadPedido(pedido: PedidoModel) {
    let total = 0;
    pedido.productos?.forEach((p) => {
      total += p.cantidad;
    });
    pedido.productosPersonalizados?.forEach((p) => {
      total += p.cantidad;
    });
    this.totalCantidadSubject.next(total);
  }
}

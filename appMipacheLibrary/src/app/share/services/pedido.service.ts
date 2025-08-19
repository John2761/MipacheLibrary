import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PedidoService {
  private baseUrl = 'http://localhost:3000/pedido'; // Ajustá según backend

  constructor(private http: HttpClient) {}

  getPedidos(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }

  getPedidoById(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${id}`);
  }

  crearPedido(pedido: any): Observable<any> {
    return this.http.post<any>(this.baseUrl, pedido);
  }

  actualizarPedido(id: number, data: any): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/${id}`, data);
  }
}

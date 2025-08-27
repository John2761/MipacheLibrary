import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { PedidoModel } from '../models/PedidoModel';
import { environment } from '../../../environments/environment.development';
import { BaseAPI } from '../base-api';

@Injectable({
  providedIn: 'root',
})
export class PedidoService extends BaseAPI<PedidoModel>{

  private totalCantidadSubject = new BehaviorSubject<number>(0);
  totalCantidad$ = this.totalCantidadSubject.asObservable();

constructor(httpClient: HttpClient) { 
        super(
          httpClient,
          environment.endPointPedido);
      }

  getPedidos(): Observable<any[]> {
    return this.get();
  }

  getPedidoById(id: number): Observable<any> {
    return this.getById(id);
  }

  crearPedido(pedido: any): Observable<any> {
    return this.create(pedido);
  }

  actualizarPedido(data: any): Observable<any> {
    return this.update(data);
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

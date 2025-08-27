import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { PedidoModel } from '../models/PedidoModel';
import { environment } from '../../../environments/environment.development';
import { BaseAPI } from '../base-api';

@Injectable({
  providedIn: 'root',
})

export class PedidoService extends BaseAPI<PedidoModel>{

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
  
  // // Obtener el pedido en estado CARRITO del usuario
  // obtenerCarritoUsuario(usuarioId: number): Observable<PedidoModel> {
  //   return this.http.get<PedidoModel>(`${this.baseUrl}/carrito/${usuarioId}`);
  // }
  // // Reset manual del contador
  // resetearContador() {
  //   this._cantidadTotal.set(0);
  // }

}

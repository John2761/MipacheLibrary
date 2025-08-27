import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { PedidoModel } from '../models/PedidoModel';

@Injectable({
  providedIn: 'root',
})
export class PedidoService {
  private baseUrl = 'http://localhost:3000/pedido'; // Cambiar si es necesario
  private totalCantidadSubject = new BehaviorSubject<number>(0);
  totalCantidad$ = this.totalCantidadSubject.asObservable();

  constructor(private http: HttpClient) {}

  // Obtener todos los pedidos (admin u otros)
  getPedidos(): Observable<PedidoModel[]> {
    return this.http.get<PedidoModel[]>(this.baseUrl);
  }

  // Obtener pedido por ID
  getPedidoById(id: number): Observable<PedidoModel> {
    return this.http.get<PedidoModel>(`${this.baseUrl}/${id}`);
  }

  // Crear un pedido nuevo
  crearPedido(pedido: PedidoModel): Observable<PedidoModel> {
    return this.http.post<PedidoModel>(`${this.baseUrl}`, pedido);
  }

  // Actualizar pedido por ID
  actualizarPedido(id: number, data: Partial<PedidoModel>): Observable<PedidoModel> {
    return this.http.put<PedidoModel>(`${this.baseUrl}/${id}`, data);
  }

  // Obtener el pedido en estado CARRITO del usuario
  obtenerCarritoUsuario(usuarioId: number): Observable<PedidoModel> {
    return this.http.get<PedidoModel>(`${this.baseUrl}/carrito/${usuarioId}`);
  }

  // Crear carrito por primera vez (estado CARRITO)
  crearCarrito(usuarioId: number): Observable<PedidoModel> {
    const nuevoPedido = {
      estado: 'CARRITO',
      usuarioId,
      productos: [],
      productosPersonalizados: []
    };
    return this.http.post<PedidoModel>(`${this.baseUrl}`, nuevoPedido);
  }

  // Agregar o actualizar producto en el pedido
  agregarProductoAlPedido(pedidoId: number, productoId: number, cantidad: number): Observable<any> {
    const body = {
      productoId,
      cantidad
    };
    return this.http.post(`${this.baseUrl}/${pedidoId}/producto`, body);
  }

  // Eliminar producto específico del pedido
  eliminarProductoDelPedido(pedidoId: number, productoId: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${pedidoId}/producto/${productoId}`);
  }

  // Vaciar completamente el pedido (carrito)
  vaciarPedido(pedidoId: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${pedidoId}`);
  }

  // Actualizar contador de productos (útil para mostrar en el icono del carrito)
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

  // Reset manual del contador
  resetearContador() {
    this.totalCantidadSubject.next(0);
  }
}

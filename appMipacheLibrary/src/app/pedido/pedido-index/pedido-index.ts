import { Component, OnInit } from '@angular/core';
import { PedidoService } from '../../share/services/pedido.service';
import { PedidoModel } from '../../share/models/PedidoModel';

@Component({
  selector: 'app-pedido',
  standalone: false,
  templateUrl: './pedido-index.html',
  styleUrls: ['./pedido-index.css'],
})
export class PedidoIndex {
  
  pedidos: PedidoModel[] = [];

  constructor(private pedidoService: PedidoService) {
    this.listPedidos();
  }

  listPedidos() {
    this.pedidoService.getPedidos().subscribe((respuesta: PedidoModel[]) => {
      console.log(respuesta)
      this.pedidos = respuesta;
    });
  }
}

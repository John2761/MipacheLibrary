import { Component } from '@angular/core';
import { PedidoService } from '../../share/services/pedido.service';
import { PedidoModel } from '../../share/models/PedidoModel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pedido',
  standalone: false,
  templateUrl: './pedido-index.html',
  styleUrls: ['./pedido-index.css'],
})
export class PedidoIndex {
  pedidos: PedidoModel[] = [];

  constructor(private pedidoService: PedidoService, private router: Router) {
    this.listPedidos();
  }

  detallePedido(id: number) {
    this.router.navigate(['/pedido/' + id]);
  }

  listPedidos() {
    this.pedidoService.getPedidos().subscribe((respuesta: PedidoModel[]) => {
      console.log(respuesta);
      this.pedidos = respuesta;
    });
  }
}

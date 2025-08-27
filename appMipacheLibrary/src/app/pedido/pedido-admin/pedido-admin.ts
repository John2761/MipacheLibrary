import { Component } from '@angular/core';
import { PedidoService } from '../../share/services/pedido.service';
import { PedidoModel } from '../../share/models/PedidoModel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pedido',
  standalone: false,
  templateUrl: './pedido-admin.html',
  styleUrls: ['./pedido-admin.css'],
})
export class PedidoAdmin {
  datos: any; //Respuesta del API
  pedidos: PedidoModel[] = [];

  constructor(private pedidoService: PedidoService, private router: Router) {
    this.listPedidos();
  }

  listPedidos() {
    this.pedidoService
    .getPedidos()
    .subscribe((respuesta: PedidoModel[]) => {
      console.log(respuesta);
      this.pedidos = respuesta;
    });
  }

  detallePedido(id: number) {
    this.router.navigate(['/pedido/' + id]);
  }
}

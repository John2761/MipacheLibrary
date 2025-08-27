// pedido-detail.ts
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PedidoService } from '../../share/services/pedido.service';
import { PedidoDetailModel } from '../../share/models/PedidoDetailModel';

@Component({
  selector: 'app-pedido-detail',
  standalone: false,
  templateUrl: './pedido-detail.html',
  styleUrls: ['./pedido-detail.css']
})
export class PedidoDetail {
  pedido?: PedidoDetailModel;

  constructor(
    private route: ActivatedRoute,
    private pedidoService: PedidoService
  ) {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    
    this.pedidoService.getPedidoById(id).subscribe({
      next: (data: PedidoDetailModel) => this.pedido = data
    });
  }
}

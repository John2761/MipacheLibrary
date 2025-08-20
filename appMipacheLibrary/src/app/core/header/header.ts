import { Component, OnInit } from '@angular/core';
import { PedidoService } from '../../share/services/pedido.service';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header implements OnInit {
  cantidadTotal: number = 0;

  constructor(private pedidoService: PedidoService) {}

  ngOnInit() {
    this.pedidoService.totalCantidad$.subscribe(total => {
      this.cantidadTotal = total;
    });
  }
}

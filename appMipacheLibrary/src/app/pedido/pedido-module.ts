import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PedidoRoutingModule } from './pedido-routing-module';
import { PedidoIndex } from './pedido-index/pedido-index';


@NgModule({
  declarations: [PedidoIndex],
  
  imports: [
    CommonModule,
    PedidoRoutingModule,
    
  ]
})
export class PedidoModule { }

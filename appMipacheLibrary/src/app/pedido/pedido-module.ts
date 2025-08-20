import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PedidoRoutingModule } from './pedido-routing-module';
import { PedidoIndex } from './pedido-index/pedido-index';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PedidoForm } from './pedido-form/pedido-form';


@NgModule({
  declarations: [PedidoIndex, PedidoForm],
  
  imports: [
    CommonModule,
    ReactiveFormsModule,
    
    FormsModule,
    PedidoRoutingModule
  ]
})
export class PedidoModule { }

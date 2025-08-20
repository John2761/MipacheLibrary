import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PedidoIndex } from './pedido-index/pedido-index';
import { PedidoForm } from './pedido-form/pedido-form';

const routes: Routes = [
  { path: 'pedido', component: PedidoIndex},
  { path: 'pedido/create', component: PedidoForm},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PedidoRoutingModule { }

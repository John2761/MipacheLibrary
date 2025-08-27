import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PedidoAdmin } from './pedido-admin/pedido-admin';
import { PedidoDetail } from './pedido-detail/pedido-detail';
import { PedidoForm } from './pedido-form/pedido-form';
import { pedidoIndex } from './pedido-index/pedido-index';

const routes: Routes = [
  { path: 'pedido-admin', component: PedidoAdmin },
  { path: 'pedido', component: pedidoIndex },
  { path: 'pedido/:id', component: PedidoDetail },
  { path: 'pedido/create', component: PedidoForm },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PedidoRoutingModule { }
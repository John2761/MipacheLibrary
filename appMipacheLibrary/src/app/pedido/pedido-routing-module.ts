import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PedidoIndex } from './pedido-index/pedido-index';

  

import { PedidoDetail } from './pedido-detail/pedido-detail';
import { PedidoForm } from './pedido-form/pedido-form';

const routes: Routes = [
  { path: 'pedido', component: PedidoIndex },
  { path: 'pedido/:id', component: PedidoDetail },
  { path: 'pedido/create', component: PedidoForm },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PedidoRoutingModule { }

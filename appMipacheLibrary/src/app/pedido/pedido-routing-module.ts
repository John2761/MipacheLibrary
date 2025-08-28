import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PedidoAdmin } from './pedido-admin/pedido-admin';
import { PedidoDetail } from './pedido-detail/pedido-detail';
import { PedidoForm } from './pedido-form/pedido-form';
import { pedidoIndex } from './pedido-index/pedido-index';
import { authGuard } from '../share/auth.guard';

const routes: Routes = [
  {
    path: 'pedido-admin',
    component: PedidoAdmin,
    canActivate: [authGuard],
    data: { roles: ['ADMIN', 'USER'] },
  },

  {
    path: 'pedido',
    component: pedidoIndex,
    canActivate: [authGuard],
    data: { roles: ['USER'] },
  },

  { path: 'pedido/:id', component: PedidoDetail },

  {
    path: 'pedido/create',
    component: PedidoForm,
    canActivate: [authGuard],
    data: { roles: ['USER'] },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PedidoRoutingModule {}

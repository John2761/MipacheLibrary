import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductoDetail } from './producto-detail/producto-detail';
import { ProductoIndex } from './producto-index/producto-index';
import { ProductoAdmin } from './producto-admin/producto-admin';
import { ProductoForm } from './producto-form/producto-form';
import { authGuard } from '../share/auth.guard';

const routes: Routes = [
  //productos
  {
    path: 'producto-admin',
    component: ProductoAdmin,
    canActivate: [authGuard],
    data: { roles: ['ADMIN'] },
  },
  {
    path: 'producto/create',
    component: ProductoForm,
    canActivate: [authGuard],
    data: { roles: ['ADMIN'] },
  },
  {
    path: 'producto/update/:id',
    component: ProductoForm,
    canActivate: [authGuard],
    data: { roles: ['ADMIN'] },
  },
  
  { path: 'producto/:id', component: ProductoDetail },
  { path: 'producto', component: ProductoIndex },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductosRoutingModule {}

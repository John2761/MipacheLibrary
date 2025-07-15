import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { inicio } from './home/inicio/inicio';
import { PageNotFound } from './share/page-not-found/page-not-found';
import { ProductoIndex } from './productos/producto-index/producto-index';
import { ProductoDetail } from './productos/producto-detail/producto-detail';
import { PromocionIndex } from './promocion/promocion-index/promocion-index';
import { PromocionDetail } from './promocion/promocion-detail/promocion-detail';
import { ResenaIndex } from './resena/resena-index/resena-index';

const routes: Routes = [
  { path:'inicio',component: inicio},
  { path:'', redirectTo:'/inicio' ,pathMatch:'full'},
  //productos
  { path:'producto',component: ProductoIndex},
  { path:'producto/:id',component: ProductoDetail},
  //promociones
  { path:'promocion',component: PromocionIndex},
  { path:'promocion/:id',component: PromocionDetail},
  //reseñas
  { path: 'resena', component: ResenaIndex },
  //{ path: 'resena/:id', component: ResenaDetail },
  { path:'**', component: PageNotFound}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

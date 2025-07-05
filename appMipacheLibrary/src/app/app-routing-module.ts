import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { inicio } from './home/inicio/inicio';
import { PageNotFound } from './share/page-not-found/page-not-found';
import { ProductoIndex } from './productos/producto-index/producto-index';
import { ProductoDetail } from './productos/producto-detail/producto-detail';

const routes: Routes = [
  { path:'inicio',component: inicio},
  { path:'', redirectTo:'/inicio' ,pathMatch:'full'},
  { path:'producto',component: ProductoIndex},
  { path:'producto/:id',component: ProductoDetail},
  { path:'**', component: PageNotFound}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

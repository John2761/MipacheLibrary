import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PromocionIndex } from './promocion-index/promocion-index';
import { PromocionDetail } from './promocion-detail/promocion-detail';
import { PromocionAdmin } from './promocion-admin/promocion-admin';
import { PromocionForm } from './promocion-form/promocion-form';

const routes: Routes = [
    //promociones
    { path:'promocion-admin', component: PromocionAdmin },
    { path:'promocion/create', component: PromocionForm },
    { path:'promocion/update/:id', component: PromocionForm },
    { path:'promocion',component: PromocionIndex},
    { path:'promocion/:id',component: PromocionDetail},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PromocionRoutingModule { }
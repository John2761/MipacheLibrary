import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonalizadoForm } from './personalizado-form/personalizado-form';

const routes: Routes = [
    //personalizado
    { path:'personalizado/create', component: PersonalizadoForm },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonalizadoRoutingModule { }

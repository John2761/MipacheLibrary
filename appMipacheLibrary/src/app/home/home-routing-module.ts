import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcercaDe } from './acerca-de/acerca-de';

const routes: Routes = [
  {path:'acerca-de', component: AcercaDe}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class HomeRoutingModule { }

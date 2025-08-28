import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcercaDe } from './acerca-de/acerca-de';
import { Unauthorized } from './unauthorized/unauthorized';

const routes: Routes = [
  {path:'acerca-de', component: AcercaDe},
  {path:'unauthorized', component: Unauthorized}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class HomeRoutingModule { }

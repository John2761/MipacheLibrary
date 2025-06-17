import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Index } from './home/index';
import { PageNotFound } from './share/page-not-found/page-not-found';

const routes: Routes = [
  { path:'index',component: Index},
  { path:'', redirectTo:'/index' ,pathMatch:'full'},
  { path:'**', component: PageNotFound}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

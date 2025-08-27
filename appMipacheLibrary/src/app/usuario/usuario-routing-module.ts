import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuarioCreate } from './usuario-create/usuario-create';
import { UsuarioLogin } from './usuario-login/usuario-login';
import { UsuarioIndex } from './usuario-index/usuario-index';

const routes: Routes = [
  {
    path: 'usuario',
    component: UsuarioIndex,
    children: [
      { path: 'registrar', component: UsuarioCreate },
      { path: 'login', component: UsuarioLogin },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioRoutingModule { }

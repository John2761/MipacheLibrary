import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuarioCreate } from './usuario-create/usuario-create';
import { UsuarioLogin } from './usuario-login/usuario-login';
import { UsuarioIndex } from './usuario-index/usuario-index';
import { authGuard } from '../share/auth.guard';

const routes: Routes = [
  { path: 'usuario/', component: UsuarioIndex },
  {
    path: 'usuario/registrar',
    component: UsuarioCreate,
    //canActivate: [authGuard],
    //data: { roles: ['ADMIN'] },
  },
  
  { path: 'usuario/login', component: UsuarioLogin },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsuarioRoutingModule {}

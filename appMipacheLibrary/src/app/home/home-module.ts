import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing-module';
import { inicio } from './inicio/inicio';
import { AcercaDe } from './acerca-de/acerca-de';
import { MatCardModule} from '@angular/material/card';
import { Unauthorized } from './unauthorized/unauthorized';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIcon } from '@angular/material/icon';

@NgModule({
  declarations: [
    inicio,
    AcercaDe,
    Unauthorized
  ],
  imports: [
    MatIcon,
    MatGridListModule,
    CommonModule,
    HomeRoutingModule,
    MatCardModule
  ]
})
export class HomeModule { }

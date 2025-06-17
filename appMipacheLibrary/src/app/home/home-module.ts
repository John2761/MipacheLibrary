import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing-module';
import { Index } from './index/index';
import { AcercaDe } from './acerca-de/acerca-de';


@NgModule({
  declarations: [
    Index,
    AcercaDe
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }

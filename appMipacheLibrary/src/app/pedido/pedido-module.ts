import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PedidoRoutingModule } from './pedido-routing-module';
import { PedidoAdmin } from './pedido-admin/pedido-admin';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDividerModule } from '@angular/material/divider';
import { MatRadioModule } from '@angular/material/radio';
import { MatDialogModule } from '@angular/material/dialog';
import { MatBadgeModule } from '@angular/material/badge';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PedidoForm } from './pedido-form/pedido-form';
import { PedidoDetail } from './pedido-detail/pedido-detail';
import { pedidoIndex } from './pedido-index/pedido-index';


@NgModule({
  declarations: [
    PedidoAdmin, 
    PedidoForm, 
    PedidoDetail, 
    pedidoIndex],
  
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatChipsModule,
    MatBadgeModule,
    MatDialogModule,
    MatRadioModule,
    MatDividerModule,
    MatTooltipModule,
    MatGridListModule,
    MatMenuModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    PedidoRoutingModule
  ]
})
export class PedidoModule { }

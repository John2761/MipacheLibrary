import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ProductoService } from '../../share/services/producto.service';
import { NotificationService } from '../../share/notification-service';
import { Router } from '@angular/router';
import { ProductoModel } from '../../share/models/ProductoModel';


@Component({
  selector: 'app-producto-index',
  standalone: false,
  templateUrl: './producto-index.html',
  styleUrls: ['./producto-index.css'],
})
export class ProductoIndex {
  datos: ProductoModel[] = [];
  datosOriginales: ProductoModel[] = [];

  filtroNombre = new FormControl('');

  constructor(
    private pdService: ProductoService,
    private noti: NotificationService,
    private router: Router
  ) {
    this.listProductos();
  }

  //Listar todos los Productos del API
  listProductos() {
    this.pdService.get().subscribe((respuesta: ProductoModel[]) => {
      this.datos = respuesta;
      this.datosOriginales = respuesta;
      console.log(this.datos)
    });
  }

  buscarPorNombre() {
    const valor = this.filtroNombre.value?.trim().toLowerCase();
    if (!valor) {
      this.datos = this.datosOriginales;
    } else {
      this.datos = this.datosOriginales.filter(p =>
        p.nombre.toLowerCase().includes(valor)
      );
    }
  }

  detalle(id: number) {
    this.router.navigate(['/producto', id]);
  }

  comprar(producto: ProductoModel) {
    this.noti.success('Compra', 'Producto comprado: ' + producto.nombre, 5000);
  }

  trackById(index: number, item: ProductoModel): number {
    return item.id;
  }
}
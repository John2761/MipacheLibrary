import { Component } from '@angular/core';
import { ProductoService } from '../../share/services/producto.service';
import { NotificationService } from '../../share/notification-service';
import { Router } from '@angular/router';
import { ProductoModel } from '../../share/models/ProductoModel';

@Component({
  selector: 'app-producto-index',
  standalone: false,
  templateUrl: './producto-index.html',
  styleUrl: './producto-index.css',
})
export class ProductoIndex {
  //Respuesta del API
  datos: any;

  constructor(
    private pdService: ProductoService,
    private noti: NotificationService,
    private router: Router
  ) {
    this.listProductos();
  }

      //Listar todos los Productos del API
  listProductos() {
    //localhost:3000/Producto
    this.pdService.get().subscribe((respuesta: ProductoModel[]) => {
      console.log(respuesta);
      this.datos = respuesta;
      
    });
  }

  detalle(id:Number){
    this.router.navigate(['/producto',id])
  }

  comprar(producto:ProductoModel){
    this.noti.success('Compra','Producto comprado: '+producto.nombre,5000)
  }
}

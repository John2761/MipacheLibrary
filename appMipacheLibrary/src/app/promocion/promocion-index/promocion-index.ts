import { Component, OnInit } from '@angular/core';
import { PromocionService } from '../../share/services/promocion.service';
import { PromocionModel } from '../../share/models/PromocionModel';



@Component({
  selector: 'app-promocion-index',
  standalone: false,
  templateUrl: './promocion-index.html',
  styleUrls: ['./promocion-index.css']
})
export class PromocionIndex {
  //datos del API
  datos: any;

  constructor(
    private promocionService: PromocionService
  ) {
    this.listProductos();
  }

 listProductos() {
    //localhost:3000/Producto
    this.promocionService.get().subscribe((respuesta: PromocionModel[]) => {
      console.log(respuesta);
      this.datos = respuesta;
    });
  }

  getEstado(promo: any): string {
    const hoy = new Date();
    const inicio = new Date(promo.fechaInicio);
    const fin = new Date(promo.fechaFin);
    if (hoy >= inicio && hoy <= fin) return 'Vigente';
    if (hoy < inicio) return 'Pendiente';
    return 'Aplicado';
  }

  getEstadoClase(promo: any): string {
    const estado = this.getEstado(promo);
    if (estado === 'Vigente') return 'vigente';
    if (estado === 'Pendiente') return 'pendiente';
    return 'aplicado';
  }
}

import { Component, OnInit } from '@angular/core';
import { PromocionService } from '../../share/services/promocion.service';
import { PromocionModel } from '../../share/models/PromocionModel';
import { EstadoPromoModel, TipoDescuento } from '../../share/models/EnumModel';

@Component({
  selector: 'app-promocion-admin',
  standalone: false,
  templateUrl: './promocion-admin.html',
  styleUrls: ['./promocion-admin.css'],
})
export class PromocionAdmin implements OnInit {
  promociones: PromocionModel[] = [];
  columnas: string[] = ['nombre', 'tipo', 'descuento', 'estado', 'fechas', 'acciones'];

  // Enums para mostrar en plantilla
  estadoPromo = EstadoPromoModel;
  tipoDescuento = TipoDescuento;

  constructor(private promocionService: PromocionService) {}

  ngOnInit(): void {
    this.cargarPromociones();
  }

  cargarPromociones(): void {
    this.promocionService.get().subscribe({
      next: (res) => {
        this.promociones = res;
      },
      error: (err) => {
        console.error('Error al obtener las promociones:', err);
      },
    });
  }
}

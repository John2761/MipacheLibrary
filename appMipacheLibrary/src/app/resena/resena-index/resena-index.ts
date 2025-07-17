import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ResenaService } from '../../share/services/resena.service';

@Component({
  selector: 'app-resena-index',
  standalone: false,
  templateUrl: './resena-index.html',
  styleUrls: ['./resena-index.css'],
})
export class ResenaIndex {
  resenas: any[] = [];
  resenasFiltradas: any[] = [];           // ← resenas que se muestran
  productosUnicos: string[] = [];         // ← para opciones del filtro
  filtroProducto: string = '';            // ← valor seleccionado
  destroy$ = new Subject<void>();

  constructor(private ResenaService: ResenaService) {
    this.cargarResenas();
  }

  cargarResenas() {
    this.ResenaService.getAll()
      .pipe(takeUntil(this.destroy$))
      .subscribe((data) => {
        this.resenas = data.sort(
          (a: any, b: any) => new Date(b.fecha).getTime() - new Date(a.fecha).getTime()
        );

        // Obtener productos únicos para el filtro
        this.productosUnicos = [
          ...new Set(this.resenas.map((r) => r.producto.nombre)),
        ].sort();

        // Mostrar todas las reseñas por defecto
        this.resenasFiltradas = [...this.resenas];
      });
  }

  filtrarResenas() {
    if (!this.filtroProducto) {
      this.resenasFiltradas = [...this.resenas];
    } else {
      this.resenasFiltradas = this.resenas.filter(
        (r) => r.producto.nombre === this.filtroProducto
      );
    }
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}

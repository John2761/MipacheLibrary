import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PromocionService } from '../../share/services/promocion.service';
import { PromocionModel } from '../../share/models/PromocionModel';

@Component({
  selector: 'app-promocion-detail',
  standalone: false,
  templateUrl: './promocion-detail.html',
  styleUrl: './promocion-detail.css',
})
export class PromocionDetail {
  promocion!: PromocionModel;

  constructor(
    private route: ActivatedRoute,
    private promocionService: PromocionService
  ) {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.promocionService.getById(Number(id)).subscribe({
        next: (data) => {
          this.promocion = data;
        },
        error: (err) => console.error('Error al cargar la promoción', err),
      });
    }
  }

  getNombresProductos(): string {
    return this.promocion?.productos?.map((p) => p.nombre).join(', ') || '';
  }

  getNombresCategorias(): string {
    return this.promocion?.categorias?.map((c) => c.nombre).join(', ') || '';
  }
}

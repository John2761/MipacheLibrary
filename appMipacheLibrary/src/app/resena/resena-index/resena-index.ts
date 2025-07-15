import { Component } from '@angular/core';

import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { ResenaService } from '../../share/services/resena.service';

@Component({
  selector: 'app-resena-index',
  standalone: false,
  templateUrl: './resena-index.html',
  styleUrls: ['./resena-index.css'],
})
export class ResenaIndex {
  resenas: any[] = [];
  destroy$ = new Subject<void>();

  constructor(private ResenaService: ResenaService) {
    this.cargarResenas();
  }

  cargarResenas() {
    this.ResenaService.getAll()
      .pipe(takeUntil(this.destroy$))
      .subscribe((data) => {
        // Ordenar por fecha descendente (más recientes primero)
        this.resenas = data.sort((a: any, b: any) => new Date(b.fecha).getTime() - new Date(a.fecha).getTime());
      });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}

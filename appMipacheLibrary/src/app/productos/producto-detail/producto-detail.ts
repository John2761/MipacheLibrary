import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { ProductoService } from '../../share/services/producto.service';

@Component({
  selector: 'app-producto-detail',
  standalone: false,
  templateUrl: './producto-detail.html',
  styleUrl: './producto-detail.css',
})
export class ProductoDetail {
  datos: any;
  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(private pdService:ProductoService,
    private router:Router,
    private activeRoute:ActivatedRoute
  ) {
    let id=this.activeRoute.snapshot.paramMap.get('id')
    if(!isNaN(Number(id))) this.obtenerProducto(Number(id))
  }

  obtenerProducto(id: any) {
    this.pdService
      .getById(id)
      .pipe(takeUntil(this.destroy$)) // Operador de RxJS para desuscribirse automáticamente
      .subscribe((data: any) => {
        console.log(data);
        this.datos = data;
      });
  }
  goBack(): void {
    this.router.navigate(['/producto/']);
  }
  //Hook del ciclo de vida de Angular: se ejecuta cuando el componente va a ser destruido
  ngOnDestroy() {
    this.destroy$.next(true); // Emite un valor para notificar a 'takeUntil'
    this.destroy$.unsubscribe(); // Completa el Subject 'destroy$' para liberar recursos
  }
}

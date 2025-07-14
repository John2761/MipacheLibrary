import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  imagenSeleccionada: string = '';
  formComentario: FormGroup;
  destroy$: Subject<boolean> = new Subject<boolean>();
  valoracion: number = 0;  // Agregar la variable para almacenar la valoración

  constructor(
    private pdService: ProductoService,
    private router: Router,
    private activeRoute: ActivatedRoute,
    private fb: FormBuilder
  ) {
    this.formComentario = this.fb.group({
      nombre: ['', Validators.required],
      comentario: ['', Validators.required],
    });

    this.activeRoute.params
      .pipe(takeUntil(this.destroy$))
      .subscribe((params) => {
        const id = Number(params['id']);
        if (!isNaN(id)) {
          this.obtenerProducto(id);
        }
      });
  }

  obtenerProducto(id: any) {
    this.pdService
      .getById(id)
      .pipe(takeUntil(this.destroy$)) // Operador de RxJS para desuscribirse automáticamente
      .subscribe((data: any) => {
        this.datos = data;
        this.imagenSeleccionada =
          data.imagenPrincipal || data.imagenes?.[0]?.ruta || 'imagen-not-found-jpg';
      });
  }

  getImgUrl(nombre: string): string {
    return 'http://localhost:3000/images/' + nombre;
  }

  cambiarImagen(nombre: string) {
    this.imagenSeleccionada = nombre;
  }

  comprar() {
    alert(`Libro "${this.datos.nombre}" agregado al carrito.`);
  }

  enviarComentario() {
    if (this.formComentario.valid) {
      const comentario = {
        ...this.formComentario.value,
        valoracion: this.valoracion,  // Incluir la valoración
      };
      console.log(comentario);  // Muestra el comentario junto con la valoración
      this.formComentario.reset();
      this.valoracion = 0;  // Reseteamos la valoración después de enviar el comentario
    }
  }

  // Función para manejar la selección de estrellas (también para desmarcar la selección)
setValoracion(star: number) {
  if (this.valoracion === star) {
    // Si la estrella seleccionada es la misma que la actual, desmarcarla (valoración 0)
    this.valoracion = 0;
  } else {
    // De lo contrario, actualizar con la nueva valoración
    this.valoracion = star;
  }
}


  goBack(): void {
    this.router.navigate(['/producto/']);
  }

  // Hook del ciclo de vida de Angular: se ejecuta cuando el componente va a ser destruido
  ngOnDestroy() {
    this.destroy$.next(true); // Emite un valor para notificar a 'takeUntil'
    this.destroy$.unsubscribe(); // Completa el Subject 'destroy$' para liberar recursos
  }
}

import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';
import { ProductoService } from '../../share/services/producto.service';
import { ProductoModel } from '../../share/models/ProductoModel';
import { CartService } from '../../share/cart.service';
import { NotificationService } from '../../share/notification-service';

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
  valoracion: number = 0; // Agregar la variable para almacenar la valoración
  formatoEtiqueta: string = 'N/A';
  idiomaEtiqueta: string = 'N/A';
  usuarioId: number = 0;
  usuarioNombre: string = '';

  constructor(
    private cartService: CartService,
    private pdService: ProductoService,
    private noti: NotificationService,
    private router: Router,
    private activeRoute: ActivatedRoute,
    private fb: FormBuilder
  ) {
    this.formComentario = this.fb.group({
      comentario: ['', [Validators.required, Validators.minLength(5)]],
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
        console.log('Producto:', data);
        const etiquetas =
          data.etiquetas?.map((e: any) => e.descripcion.toLowerCase()) || [];

        this.formatoEtiqueta = etiquetas.find((desc: string) =>
          desc.includes('pasta dura')
        )
          ? 'Pasta dura'
          : 'N/A';
        this.idiomaEtiqueta = etiquetas.find((desc: string) =>
          desc.includes('español')
        )
          ? 'Español'
          : 'N/A';
        this.imagenSeleccionada =
          data.imagenPrincipal ||
          data.imagenes?.[0]?.ruta ||
          'imagen-not-found-jpg';
      });
  }

  accionPrincipal(producto: ProductoModel): void {
    if (this.datos?.esPersonalizado) {
      // Ir al producto personalizado si se puede personalizar
      this.router.navigate(['/personalizado/create']);
      //Sino agregar el producto al carrito
       } else {
         this.comprar(producto); // tu lógica existente de "Agregar a la bolsa"
    }
  }

  getImgUrl(nombre: string): string {
    return 'http://localhost:3000/images/' + nombre;
  }

  cambiarImagen(nombre: string) {
    this.imagenSeleccionada = nombre;
  }

  comprar(producto: ProductoModel) {
    console.log(producto);
    this.noti.success(
      'Compra',
      'Videojuego comprado: ' + producto.nombre,
      5000
    );
    this.cartService.addToCart(producto);
  }

  enviarComentario() {
    console.log('Intentando enviar reseña'); // ← ¿aparece en consola?
    if (this.formComentario.valid && this.valoracion > 0) {
      const comentario = {
        comentario: this.formComentario.value.comentario,
        valoracion: this.valoracion,
        usuarioId: this.usuarioId,
        productoId: this.datos.id,
      };

      this.pdService.crearResena(comentario).subscribe(() => {
        this.obtenerProducto(this.datos.id); // Refresca reseñas y promedio
        this.formComentario.reset();
        this.valoracion = 0;
      });
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

  esFormatoPastaDura(): boolean {
    return this.datos?.etiquetas?.some((e: any) =>
      e.descripcion?.toLowerCase().includes('pasta dura')
    );
  }

  esIdiomaEspanol(): boolean {
    return this.datos?.etiquetas?.some((e: any) =>
      e.descripcion?.toLowerCase().includes('español')
    );
  }

  goBack(): void {
    this.router.navigate(['/producto/']);
  }

  // Hook del ciclo de vida de Angular: se ejecuta cuando el componente va a ser destruido
  ngOnDestroy() {
    this.destroy$.next(true); // Emite un valor para notificar a 'takeUntil'
    this.destroy$.unsubscribe(); // Completa el Subject 'destroy$' para liberar recursos
  }

  ngOnInit() {
    this.usuarioId = 1;
    this.usuarioNombre = 'Kisha Pérez';
  }
}

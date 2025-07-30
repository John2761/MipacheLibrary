import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductoService } from '../../share/services/producto.service';
import { NotificationService } from '../../share/notification-service';
import { CategoriaModel } from '../../share/models/CategoriaModel';
import { ProductoModel } from '../../share/models/ProductoModel';
import { CategoriaService } from '../../share/services/categoria.service';
import { minWordsValidator } from '../../share/validators/min-words-validator';
import { getFormValidationErrorMessage } from '../../share/form-validation';

@Component({
  selector: 'app-producto-form',
  standalone: false,
  templateUrl: './producto-form.html',
  styleUrl: './producto-form.css',
})
export class ProductoForm implements OnInit, OnDestroy {
  //Clean rxjs
  private destroy$ = new Subject<boolean>();

  titleForm: string = 'Crear';
  idproducto: number | null = null;
  isCreate: boolean = true;

  // --- Datos de los selects o combos ---
  categoriasList: CategoriaModel[] = [];

  // --- Relativo al formulario ---
  productoForm!: FormGroup;
  number4digits = /^\d{4}$/;
  number2decimals = /^[0-9]+[.,]{1,1}[0-9]{2,2}$/;

  // --- Gestión de imagen ---
  currentFile?: File;
  preview: string = '';
  nameImage: string = 'image-not-found.jpg';
  previousImage: string | null = null;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private pdService: ProductoService,
    private categoriaService: CategoriaService,
    private route: ActivatedRoute,
    private noti: NotificationService
  ) {}

  ngOnInit(): void {
    //Inicializar formulario
    this.initForm();
    //Obtener lista de categorias
    this.listaCategoria();
    //Verificar si se envio un id por parametro para crear formulario para actualizar
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      this.titleForm = 'Actualizar';
      this.isCreate = false;
      this.idproducto = +idParam;

      this.pdService
        .getById(this.idproducto)
        .pipe(takeUntil(this.destroy$))
        .subscribe((data: ProductoModel) => {
          this.patchFormValues(data);
        });
    }
  }
  /**
   * Inicializar el formulario reactivo
   */

  private initForm(): void {
    this.productoForm = this.fb.group({
      //nombre de la Entrada: [valor inicial, reglas de validación]
      id: [null],
      nombre: [null, [Validators.required, Validators.minLength(3)]],
      descripcion: [null, [Validators.required, minWordsValidator(3)]],
      precio: [
        null,
        [Validators.required, Validators.pattern(this.number2decimals)],
      ],
      imagenPrincipal: [this.nameImage],
      categorias: [null, Validators.required],
    });
  }

  //Listar todos los categorias
  listaCategoria() {
    this.categoriaService
      .get()
      .pipe(takeUntil(this.destroy$))
      .subscribe((respuesta: CategoriaModel[]) => {
        console.log('categorias cargadas:', respuesta); // <-- Agregar esto
        this.categoriasList = respuesta;
      });
  }

  /**
   * Carga en el formulario el producto existeste para actualizar.
   * @param data El objecto de respuesta del API.
   */
  private patchFormValues(data: ProductoModel): void {
    this.productoForm.patchValue({
      id: data.id,
      nombre: data.nombre,
      descripcion: data.descripcion,
      imagenPrincipal: data.imagenPrincipal,
      precio: parseFloat(data.precio.toString()).toFixed(2),
      categorias: data.categorias.map(({ id }) => id), //Mapear los categorias solo con id
    });

    this.nameImage = data.imagenPrincipal || 'image-not-found.jpg'; // Sí data.imagen es null/empty, usar valor por defecto
    this.previousImage = data.imagenPrincipal;
  }

  /**
   * Gestionar el archivo seleccionado para subir la imagen
   * @param event cada vez que el evento cambia al seleccionar un archivo de imagen
   */
  selectFile(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      this.currentFile = input.files[0];
      this.nameImage = this.currentFile.name;
      const reader = new FileReader();
      reader.onload = (e: ProgressEvent<FileReader>) => {
        this.preview = e.target?.result as string;
      };
      reader.readAsDataURL(this.currentFile);
    } else {
      this.currentFile = undefined;
      this.preview = '';

      this.nameImage = this.previousImage || 'image-not-found.jpg';
    }
  }

  /**
   * Gestiona el envío del formulario: carga la imagen y luego guarda/actualiza el producto.
   */
  submitproducto(): void {
    this.productoForm.markAllAsTouched(); // Marcar todos los controles como touched para mostrar mensajes de validación
    if (this.productoForm.invalid) {
      this.noti.error(
        'Formulario Inválido',
        'Por favor, revise los campos marcados en rojo.',
        5000
      );
      console.log('Formulario inválido:', this.productoForm.errors);
      return;
    }

    const formValue = this.productoForm.value;
    console.log(formValue);

    /*   // Transforma los valores del formulario para que coincidan con la estructura en el API
    const payloadcategorias = formValue.categorias
      ? formValue.categorias.map((id: number) => ({ id }))
      : [];
    const payloadPlataformas = formValue.plataformas
      ? formValue.plataformas.map((p: PlataformaproductoModel) => ({
          anno_lanzamiento: p.anno_lanzamiento,
          plataformaId: Number(p.plataformaId),
        }))
      : [];

    // Verificar que precio es número
    const payloadPrecio =
      typeof formValue.precio === 'string'
        ? parseFloat(formValue.precio)
        : formValue.precio;

    //Paso 1: Gestione primero la carga de la imagen en el API si se selecciona un archivo nuevo
    if (this.currentFile) {
      console.log('Imagen encontrada');
      this.uploadService
        .upload(this.currentFile, this.previousImage)
        .subscribe((data: any) => {
          this.nameImage = data.filename;
          this.noti.info('Mantenimiento producto', data.message, 5000);
          //Establecer valores a actualizar
          this.productoForm.patchValue({
            categorias: payloadcategorias,
            precio: payloadPrecio,
            imagen: data.fileName,
            plataformas: payloadPlataformas,
          });
          console.log(this.productoForm.value);
          //Paso 2: Guardar/actualizar el producto en el API
          this.guardarproducto();
        });
    } else {
      //Sino hay imagen
      //Establecer valores a actualizar
      this.productoForm.patchValue({
        categorias: payloadcategorias,
        precio: payloadPrecio,
        imagen: this.previousImage,
        plataformas: payloadPlataformas,
      });
      //Paso 2: Guardar/actualizar el producto en el API
      this.guardarproducto();
    } */
  }
  guardarproducto() {
    const formValue = this.productoForm.value;

    const payload = {
      ...formValue,
      categorias: formValue.categorias.map((id: number) => ({ id })), // genera objetos válidos
      precio: +formValue.precio,
      imagenPrincipal: this.nameImage,
    };

    if (this.isCreate) {
      //Accion API create enviando toda la informacion del formulario
      this.pdService
        .create(this.productoForm.value)
        .pipe(takeUntil(this.destroy$))
        .subscribe((data: any) => {
          this.noti.success(
            'Crear producto',
            `producto creado: ${data.nombre}`,
            5000,
            '/producto-admin'
          );
        });
    } else {
      console.log('Payload a enviar:', payload);
      //Accion API actualizar enviando toda la informacion del formulario
      this.pdService
        .update(payload)
        .pipe(takeUntil(this.destroy$))
        .subscribe({
          next: (data: any) => {
            console.log('✅ Datos enviados: ', data);
            this.noti.success(
              'Actualizar producto',
              `Producto actualizado: ${data.nombre}`,
              5000,
              '/producto-admin'
            );
          },
          error: (err) => {
            console.error('❌ Error al actualizar:', err);
            this.noti.error(
              'Error',
              'Ocurrió un error al actualizar el producto',
              5000
            );
          },
        });
    }
  }
  /**
   * Gestión de errores del formulario
   */
  public errorHandling(controlPath: string): string | false {
    // Pasamos el formulario principal y la ruta del control
    return getFormValidationErrorMessage(this.productoForm, controlPath);
  }

  onReset(): void {
    this.productoForm.reset();
    this.preview = '';
    this.currentFile = undefined;
    this.nameImage = 'image-not-found.jpg';
    //Reset plataformas
  }

  onBack(): void {
    this.router.navigate(['/producto-admin']);
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}

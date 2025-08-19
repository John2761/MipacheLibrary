import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationService } from '../../share/notification-service';
import { getFormValidationErrorMessage } from '../../share/form-validation';
import { PrecioColorModel, PrecioMaterialModel, PrecioTamannoModel } from '../../share/models/PreciosModel';
import { PersonalizadoService } from '../../share/services/personalizado.service';
import { PrecioColorService } from '../../share/services/precioColor.service';
import { PrecioMaterialService } from '../../share/services/precioMaterial.service';
import { PrecioTamannoService } from '../../share/services/precioTamanno.service';

@Component({
  selector: 'app-personalizado-form',
  standalone: false,
  templateUrl: './personalizado-form.html',
  styleUrl: './personalizado-form.css',
})
export class PersonalizadoForm implements OnInit, OnDestroy {
  //Clean rxjs
  private destroy$ = new Subject<boolean>();

  titleForm: string = 'Crear';
  idpersonalizado: number | null = null;
  isCreate: boolean = true;

  // --- Datos de los selects o combos ---
  materialesList: PrecioMaterialModel[] = [];
  tamannosList: PrecioTamannoModel[] = [];
  coloresList: PrecioColorModel[] = [];

  // --- Relativo al formulario ---
  personalizadoForm!: FormGroup;
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
    private personalizadoService: PersonalizadoService,
    private precioColorService: PrecioColorService,
    private precioTamannoService: PrecioTamannoService,
    private precioMaterialService: PrecioMaterialService,
    private route: ActivatedRoute,
    private noti: NotificationService
  ) {}

  ngOnInit(): void {
    //Inicializar formulario
    this.initForm();

    //Obtener lista de categorias
    this.listaMateriales();
    this.listaTamannos();
    this.listaColores();
  }
  /**
   * Inicializar el formulario reactivo
   */

  private initForm(): void {
    this.personalizadoForm = this.fb.group({
      id: [null], 
      // solo con selector
      colorId: [null, Validators.required],
      tamannoId: [null, Validators.required],
      materialId: [null, Validators.required],

    });
  }

  //Listar todos los Materiales
  listaMateriales() {
    this.precioMaterialService
      .get()
      .pipe(takeUntil(this.destroy$))
      .subscribe((respuesta: PrecioMaterialModel[]) => {
        this.materialesList = respuesta;
      });
  }

  //Listar todos los tamaños
  listaTamannos() {
    this.precioTamannoService
      .get()
      .pipe(takeUntil(this.destroy$))
      .subscribe((respuesta: PrecioTamannoModel[]) => {
        this.tamannosList = respuesta;
      });
  }

  //Listar todos los Colores
  listaColores() {
    this.precioColorService
      .get()
      .pipe(takeUntil(this.destroy$))
      .subscribe((respuesta: PrecioColorModel[]) => {
        this.coloresList = respuesta;
      });
  }

  submitpersonalizado(): void {
    this.personalizadoForm.markAllAsTouched(); // Marcar todos los controles como touched para mostrar mensajes de validación
    if (this.personalizadoForm.invalid) {
      this.noti.error(
        'Formulario Inválido',
        'Por favor, revise los campos marcados en rojo.',
        5000
      );
      //console.log('Formulario inválido:', this.personalizadoForm.errors);
      console.log('Errores del formulario:');
      Object.keys(this.personalizadoForm.controls).forEach((key) => {
        const controlErrors = this.personalizadoForm.get(key)?.errors;
        if (controlErrors) {
          console.log(`${key}:`, controlErrors);
        }
      });
      return;
    }

    const formValue = this.personalizadoForm.value;
    console.log(formValue);

    // Transforma los valores del formulario para que coincidan con la estructura en el API
    const payloadcolores = (formValue.Materiales || [])
      .filter((mat: any) => mat?.id && !isNaN(Number(mat.id)))
      .map((mat: any) => ({ id: Number(mat.id) }));

    const payloadtamannos = (formValue.Materiales || [])
      .filter((mat: any) => mat?.id && !isNaN(Number(mat.id)))
      .map((mat: any) => ({ id: Number(mat.id) }));

    const payloadmateriales = (formValue.Materiales || [])
      .filter((mat: any) => mat?.id && !isNaN(Number(mat.id)))
      .map((mat: any) => ({ id: Number(mat.id) }));

    // Verificar que precio es número
    const payloadPrecio =
      typeof formValue.precio === 'string'
        ? parseFloat(formValue.precio)
        : formValue.precio;

    //Paso 2: Guardar/actualizar el personalizado en el API
    this.guardarpersonalizado();
  }

  guardarpersonalizado() {
    if (this.isCreate) {
      //Accion API create enviando toda la informacion del formulario
      this.personalizadoService
        .create(this.personalizadoForm.value)
        .pipe(takeUntil(this.destroy$))
        .subscribe((data: any) => {
          this.noti.success(
            'Crear personalizado',
            `personalizado creado: ${data.nombre}`,
            5000,
            '/producto'
          );
        });
    }
  }

  /**
   * Gestión de errores del formulario
   */
  public errorHandling(controlPath: string): string | false {
    // Pasamos el formulario principal y la ruta del control
    return getFormValidationErrorMessage(this.personalizadoForm, controlPath);
  }
  onReset(): void {
    this.personalizadoForm.reset();
    this.preview = '';
    this.currentFile = undefined;
    this.nameImage = 'image-not-found.jpg';
  }

  onBack(): void {
    this.router.navigate(['/personalizado-admin']);
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}

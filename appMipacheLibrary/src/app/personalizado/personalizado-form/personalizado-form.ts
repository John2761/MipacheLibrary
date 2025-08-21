import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationService } from '../../share/notification-service';
import { getFormValidationErrorMessage } from '../../share/form-validation';
import {
  PrecioColorModel,
  PrecioMaterialModel,
  PrecioTamannoModel,
} from '../../share/models/PreciosModel';
import { PersonalizadoService } from '../../share/services/personalizado.service';
import { PrecioColorService } from '../../share/services/precioColor.service';
import { PrecioMaterialService } from '../../share/services/precioMaterial.service';
import { PrecioTamannoService } from '../../share/services/precioTamanno.service';
import { map, startWith } from 'rxjs/operators';
import { ProductoService } from '../../share/services/producto.service';
import { ProductoModel } from '../../share/models/ProductoModel';

@Component({
  selector: 'app-personalizado-form',
  standalone: false,
  templateUrl: './personalizado-form.html',
  styleUrl: './personalizado-form.css',
})
export class PersonalizadoForm implements OnInit, OnDestroy {
  //Clean rxjs
  private destroy$ = new Subject<boolean>();

  private readonly BASE_ID = 1;
  productoBase?: ProductoModel;
  precioBase = 0;
  total = 0;

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
    private productoService: ProductoService,
    private route: ActivatedRoute,
    private noti: NotificationService
  ) {}

  ngOnInit(): void {
    //Inicializar formulario
    this.initForm();

    this.cargarListas();
    this.cargarProductoBase();
    this.configurarRecalculoPrecio();

    this.cargarProductoBase();
    this.configurarRecalculoPrecio();
  }

  private configurarRecalculoPrecio(): void {
    this.personalizadoForm.valueChanges
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => this.recalcularTotal());
  }

  private cargarProductoBase(): void {
    this.productoService
      .getById(this.BASE_ID)
      .pipe(takeUntil(this.destroy$))
      .subscribe((p) => {
        this.productoBase = p;

        // Prisma Decimal suele llegar como string => asegurar número
        const raw = (p as any)?.precio;
        this.precioBase =
          typeof raw === 'string' ? parseFloat(raw) : Number(raw || 0);

        // si quieres mostrar imagen base:
        const img =
          (p as any)?.imagenPrincipal || (p as any)?.imagenes?.[0]?.ruta;
        if (img) this.preview = `assets/images/${img}`;

        this.recalcularTotal(); // forzar 1er cálculo con base cargada
      });
  }

  public getPrecio(
    list: { id: number; precio: number | string }[],
    id: number | null
  ): number {
    if (!id) return 0;
    const raw = list.find((x) => x.id === id)?.precio ?? 0;
    return typeof raw === 'string' ? parseFloat(raw) : Number(raw);
  }

  private recalcularTotal(): void {
    const v = this.personalizadoForm.value;
    const pColor = this.getPrecio(this.coloresList, v.colorId);
    const pTamanno = this.getPrecio(this.tamannosList, v.tamannoId);
    const pMaterial = this.getPrecio(this.materialesList, v.materialId);
    this.total = this.precioBase + pColor + pTamanno + pMaterial;
  }
  /**
   * Inicializar el formulario reactivo
   */
  private initForm(): void {
    this.personalizadoForm = this.fb.group({
      id: [null],
      productoId: [this.BASE_ID, Validators.required],
      colorId: [null, Validators.required],
      tamannoId: [null, Validators.required],
      materialId: [null, Validators.required],
    });
  }

  private cargarListas() {
    this.listaMateriales();
    this.listaTamannos();
    this.listaColores();
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
    this.personalizadoForm.markAllAsTouched();
    if (this.personalizadoForm.invalid || this.total <= 0) {
      this.noti.error('Formulario Inválido', 'Revisa las selecciones.');
      return;
    }

    const v = this.personalizadoForm.value;
    const payload = {
      id: v.id,
      logo: v.logo,
      productoId: v.productoId,
      colorId: v.colorId,
      tamannoId: v.tamannoId,
      materialId: v.materialId,
      precioTotal: this.total,

      cantidad: v.cantidad || 1,
      total: v.total || v.precioTotal,
    };

    console.log("Formulario recibido: " + payload)

    this.personalizadoService
      .create(payload)
      .pipe(takeUntil(this.destroy$))
      .subscribe((data: any) => {
        this.noti.success(
          'Personalizado',
          'Agregado al carrito',
          5000,
          '/carrito'
        );
      });
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

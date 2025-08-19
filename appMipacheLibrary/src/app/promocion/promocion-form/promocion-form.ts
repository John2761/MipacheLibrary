import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PromocionService } from '../../share/services/promocion.service';
import { ProductoService } from '../../share/services/producto.service';
import { CategoriaService } from '../../share/services/categoria.service';
import { PromocionModel } from '../../share/models/PromocionModel';
import { TipoPromocion, TipoDescuento } from '../../share/models/EnumModel';
import { NotificationService } from '../../share/notification-service';

@Component({
  selector: 'app-promocion-form',
  standalone: false,
  templateUrl: './promocion-form.html',
  styleUrls: ['./promocion-form.css'],
})
export class PromocionForm implements OnInit {
  form!: FormGroup;
  modoEdicion: boolean = false;
  idPromo: number = 0;

  productos: { id: number; nombre: string }[] = [];
  categorias: { id: number; nombre: string }[] = [];

  tipoPromocion = TipoPromocion;
  tipoDescuento = TipoDescuento;
  keysTipoPromo: (keyof typeof TipoPromocion)[] = Object.keys(TipoPromocion) as (keyof typeof TipoPromocion)[];
  keysTipoDescuento: (keyof typeof TipoDescuento)[] = Object.keys(TipoDescuento) as (keyof typeof TipoDescuento)[];

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private promocionService: PromocionService,
    private productoService: ProductoService,
    private categoriaService: CategoriaService,
    private noti: NotificationService,
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.cargarProductosYCategorias();

    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.modoEdicion = true;
      this.idPromo = +id;
      this.promocionService.getById(this.idPromo).subscribe((data) => {
        this.form.patchValue(data);
      });
    }
  }

  initForm() {
    this.form = this.fb.group({
      nombre: ['', Validators.required],
      tipoPromocion: [TipoPromocion.POR_PRODUCTO, Validators.required],
      tipoDescuento: [TipoDescuento.PORCENTAJE, Validators.required],
      descuento: [0, [Validators.required, Validators.min(1)]],
      fechaInicio: ['', Validators.required],
      fechaFin: ['', Validators.required],
      productos: [[]],
      categorias: [[]],
    });
  }

  cargarProductosYCategorias() {
    this.productoService.get().subscribe((res) => (this.productos = res));
    this.categoriaService.get().subscribe((res) => (this.categorias = res));
  }

  guardar() {
    if (this.form.invalid) return;

    try{
    const promo: PromocionModel = {
      ...this.form.value,
      id: this.idPromo || 0,
    };
    if (this.modoEdicion) {
      this.promocionService.update(promo).subscribe(() => {
        this.noti.success(
            'Crear promocion',
            `Promocion creada: ${promo.nombre}`,
            5000,
            '/promocion-admin'
          );
      });
    } else {
      this.promocionService.create(promo).subscribe(() => {
        this.noti.success(
            'Actualizar promocion',
            `Promocion Actualizada: ${promo.nombre}`,
            5000,
            '/promocion-admin'
          );
      });
    }}catch (error){
      if(this.form.invalid){
      this.noti.error(
            'Actualizar promocion',
            `No se ha podido actualizar la promocion:` + error,
            5000,
            '/promocion-admin'
          );
        }
    }
  }

  // Validación dinámica
  esPromoPorProducto(): boolean {
    return this.form.value.tipoPromocion === TipoPromocion.POR_PRODUCTO;
  }

  esPromoPorCategoria(): boolean {
    return this.form.value.tipoPromocion === TipoPromocion.POR_CATEGORIA;
  }
}

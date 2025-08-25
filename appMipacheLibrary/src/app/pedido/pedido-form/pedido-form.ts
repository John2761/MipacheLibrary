import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { PedidoService } from '../../share/services/pedido.service';
import { PedidoModel } from '../../share/models/PedidoModel';
import { ProductoService } from '../../share/services/producto.service';

@Component({
  selector: 'app-pedido-form',
  standalone: false,
  templateUrl: './pedido-form.html',
  styleUrls: ['./pedido-form.css']
})
export class PedidoForm implements OnInit {
  pedidoForm!: FormGroup;
  productosDisponibles: any[] = [];
  usuarioSeleccionado: any;
  resumen = { subtotal: 0, impuesto: 0, total: 0 };
  impuestoRate = 0.13;

  constructor(
    private fb: FormBuilder,
    private pedidoService: PedidoService,
    private productoService: ProductoService
  ) {}

  ngOnInit(): void {
    // Simula usuario autenticado
    const usuarioAutenticado = {
      id: 1,
      nombre: 'Juan Pérez',
      correo: 'juan@mail.com',
      direccion: 'San José, Costa Rica'
    };

    this.usuarioSeleccionado = usuarioAutenticado;

    this.pedidoForm = this.fb.group({
      fecha: [new Date()],
      usuarioId: [usuarioAutenticado.id],
      direccion: [usuarioAutenticado.direccion, Validators.required],
      estado: [{ value: 'EN_CARRITO', disabled: true }],
      productos: this.fb.array([]),
      personalizados: this.fb.array([]),
      tipoPago: ['', Validators.required],
      pago: this.fb.group({
        tarjeta: this.fb.group({
          numero: [''],
          vencimiento: [''],
          cvv: [''],
          nombre: ['']
        }),
        efectivo: this.fb.group({
          montoRecibido: [0]
        })
      })
    });

    this.productoService.get().subscribe(data => this.productosDisponibles = data);
    this.onChanges();
  }

  get productos(): FormArray {
    return this.pedidoForm.get('productos') as FormArray;
  }

  get personalizados(): FormArray {
    return this.pedidoForm.get('personalizados') as FormArray;
  }

  agregarProducto(p: any): void {
    const grupo = this.fb.group({
      nombre: [p.nombre],
      productoId: [p.id],
      cantidad: [1, [Validators.required, Validators.min(1)]],
      precio: [p.precio],
      subtotal: [{ value: p.precio, disabled: true }]
    });
    this.productos.push(grupo);
    this.actualizarTotales();
  }

  eliminarProducto(index: number): void {
    this.productos.removeAt(index);
    this.actualizarTotales();
  }

  onChanges(): void {
    this.productos.valueChanges.subscribe(() => this.actualizarTotales());
    this.pedidoForm.get('tipoPago')?.valueChanges.subscribe(() => this.actualizarTotales());
  }

  actualizarTotales(): void {
    const productos = this.productos.controls;
    const personalizados = this.personalizados.controls;

    let subtotal = 0;

    productos.forEach(ctrl => {
      const cantidad = ctrl.get('cantidad')?.value || 0;
      const precio = ctrl.get('precio')?.value || 0;
      const sub = cantidad * precio;
      ctrl.get('subtotal')?.setValue(sub, { emitEvent: false });
      subtotal += sub;
    });

    personalizados.forEach(ctrl => {
      const cantidad = ctrl.get('cantidad')?.value || 0;
      const precio = ctrl.get('precioTotal')?.value || 0;
      const sub = cantidad * precio;
      ctrl.get('subtotal')?.setValue(sub, { emitEvent: false });
      subtotal += sub;
    });

    const impuesto = subtotal * this.impuestoRate;
    const total = subtotal + impuesto;

    this.resumen = {
      subtotal: Number(subtotal.toFixed(2)),
      impuesto: Number(impuesto.toFixed(2)),
      total: Number(total.toFixed(2))
    };
  }

  get vuelto(): number {
    const recibido = Number(this.pedidoForm.get('pago.efectivo.montoRecibido')?.value || 0);
    return recibido - this.resumen.total;
  }

  submitPedido(): void {
    if (this.productos.length === 0 && this.personalizados.length === 0) {
      return alert('Debe agregar al menos un producto');
    }

    const pedido: PedidoModel = {
      ...this.pedidoForm.getRawValue(),
      total: this.resumen.total
    };

    this.pedidoService.crearPedido(pedido).subscribe(() => {
      alert('Pedido registrado correctamente');
      this.pedidoForm.reset();
      this.productos.clear();
      this.personalizados.clear();
      this.actualizarTotales();
    });
  }
}

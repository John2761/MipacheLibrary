import { Component, computed, effect, inject, Signal } from '@angular/core';
import { CartService } from '../../share/cart.service';
import { ItemCartModel } from '../../share/models/ItemCartModel';
import { MatTableDataSource } from '@angular/material/table';
import { PedidoService } from '../../share/services/pedido.service';
import { NotificationService } from '../../share/notification-service';
import { environment } from '../../../environments/environment.development';
import { MatDialog } from '@angular/material/dialog';
import { PedidoForm, PedidoFormResult } from '../pedido-form/pedido-form';

@Component({
  selector: 'app-pedido-index',
  standalone: false,
  templateUrl: './pedido-index.html',
  styleUrl: './pedido-index.css',
})

export class pedidoIndex {
  //Fecha actual
  fecha = Date.now();
  private cartService = inject(CartService);
  //Lista de items de la compra
  private cartItemSignal: Signal<ItemCartModel[]>;
  totalCompra: Signal<number> = this.cartService.total;
  //Tabla
  displayedColumns: string[] = [
    'producto',
    'precio',
    'cantidad',
    'impuestos',
    'subtotal',
    'acciones',
  ];
  imageBaseUrl = environment.imageBaseUrl;
  // DataSource para la tabla de Angular Material
  dataSource = new MatTableDataSource<ItemCartModel>([]);

  constructor(
    private pedidoService: PedidoService,
    private noti: NotificationService,
    private dialog: MatDialog
  ) {
    this.cartItemSignal = this.cartService.itemsCart;
    effect(() => {
      this.dataSource.data = this.cartItemSignal();
    });
  }
  aumentarCantidad(element: ItemCartModel) {
    this.cartService.addToCart(element.producto, element.cantidad + 1);
  }
  disminuirCantidad(element: ItemCartModel) {
    this.cartService.addToCart(element.producto, element.cantidad - 1);
  }
  eliminarItem(idProducto: number) {
    this.cartService.removeFromCart(idProducto);
  }

  //Llamar la imagen al pedido
  buildImgUrl(ruta?: string): string {
    if (!ruta) return 'assets/img/no-image.png'; // fallback local
    if (/^https?:\/\//i.test(ruta)) return ruta; // ya viene absoluta
    return `${this.imageBaseUrl}${ruta}`.replace(/([^:]\/)\/+/g, '$1'); // evita dobles “/”
  }

  onImgError(ev: Event) {
    (ev.target as HTMLImageElement).src = 'assets/img/no-image.png';
  }

  abrirPago() {
    const dialogRef = this.dialog.open(PedidoForm, {
      width: '520px',
      maxWidth: '95vw',
      data: { total: this.totalCompra() }, // Signal -> valor
    });

    dialogRef.afterClosed().subscribe((result?: PedidoFormResult) => {
      if (!result?.confirmado) return;

      // Si quieres guardar dirección/tipoPago en el backend, pásalo aquí.
      // Por ahora solo reusa tu registrarpedido()
      this.registrarpedido();
    });
  }
  registrarpedido() {
    const items = this.cartService.itemsCart();
    if (items.length === 0) {
      this.noti.warning('Crear pedido', 'Agregue productos al carrito', 3000);
      return;
    }

    // Detalle con precio unitario BRUTO (como espera el controlador)
    const detalle = items.map((x) => ({
      productoId: x.producto.id,
      cantidad: x.cantidad,
      precioUnitario: x.producto.precio, // IMPORTANTE
      // personalizados: x.personalizados?.map(...) // si aplica
    }));

    const pedido = {
      usuarioId: 1, // antes enviabas clienteId
      estado: 'PAGADO', // o 'EN_CARRITO' según tu flujo
      productos: detalle,
    };

    this.pedidoService.crearPedido(pedido).subscribe({
      next: (r) => {
        this.cartService.deleteCart();
        this.noti.success('Crear pedido', 'Pedido creado #' + r.id, 3000, '/');
      },
      error: (err) => {
        console.error('Error creando pedido', err);
        this.noti.error(
          'Crear pedido',
          err?.error?.message ?? 'No se pudo crear el pedido',
          4000
        );
      },
    });
  }
}

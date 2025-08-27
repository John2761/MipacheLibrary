import { Component, inject, ViewChild } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductoService } from '../../share/services/producto.service';
import { ProductoModel } from '../../share/models/ProductoModel';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ProductoDiag } from '../producto-diag/producto-diag';

@Component({
  selector: 'app-producto-admin',
  standalone: false,
  templateUrl: './producto-admin.html',
  styleUrl: './producto-admin.css',
})
export class ProductoAdmin {
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  dataSource = new MatTableDataSource<any>();

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['nombre', 'precio', 'acciones'];

  readonly dialog = inject(MatDialog);

  constructor(
    private pdService: ProductoService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    //Label paginator
    this.paginator._intl.itemsPerPageLabel = 'Items';
    this.paginator._intl.nextPageLabel = 'Siguiente';
    this.paginator._intl.previousPageLabel = 'Anterior';
    this.paginator._intl.firstPageLabel = 'Inicio';
    this.paginator._intl.lastPageLabel = 'Fin';
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.listProductos();
  }

  toggleActivo(p: ProductoModel) {
    const payload: ProductoModel = { ...p, activo: !p.activo }; // invertimos el booleano
    this.pdService.update(payload).subscribe({
      next: (update) => {
        p.activo = update?.activo ?? !p.activo; // refleja el cambio en la tabla
        // refresca dataSource para que Angular Material repinte
        this.dataSource.data = [...this.dataSource.data];
      },
      error: (err) => console.error('No se pudo cambiar estado', err),
    });
  }

  //Listar todos los Productos del API
  listProductos() {
    //localhost:3000/Producto
    this.pdService.get().subscribe((respuesta: ProductoModel[]) => {
      console.log(respuesta);
      this.dataSource.data = respuesta;
    });
  }
  detalleProducto(id: number) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '50%';
    dialogConfig.disableClose = false;
    dialogConfig.data = {
      id: id,
    };
    const dialogRef = this.dialog.open(ProductoDiag, dialogConfig);
  }

  crearProducto() {
    this.router.navigate(['/producto/create']);
  }

  actualizarProducto(id: number) {
    this.router.navigate(['../producto/update', id], {
      relativeTo: this.route,
    });
  }
}

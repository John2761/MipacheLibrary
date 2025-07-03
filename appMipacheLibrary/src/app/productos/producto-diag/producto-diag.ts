import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Subject, takeUntil } from 'rxjs';
import { ProductoService } from '../../share/services/producto.service';

@Component({
  selector: 'app-producto-diag',
  standalone: false,
  templateUrl: './producto-diag.html',
  styleUrl: './producto-diag.css'
})
export class ProductoDiag {
datos:any;
  datosDialog:any;
  destroy$:Subject<boolean>= new Subject<boolean>();
  constructor(
    @Inject(MAT_DIALOG_DATA) data: {id: number},
    private dialogRef:MatDialogRef<ProductoDiag>,
    private pdService: ProductoService,
  ) { 
    this.datosDialog=data;
  }

  ngOnInit(): void {
    if(this.datosDialog.id){
      this.obtenerProducto(this.datosDialog.id);
    }
  }
  obtenerProducto(id:any){
    this.pdService
    .getById(id)
    .pipe(takeUntil(this.destroy$))
    .subscribe((data: any) => {
      this.datos = data;
    });
   
  }
  close(){
    //Dentro de close ()
     //this.form.value 
    this.dialogRef.close();
  } 
}


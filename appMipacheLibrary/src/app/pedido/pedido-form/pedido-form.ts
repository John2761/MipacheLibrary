import { Component, Inject } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

export class PedidoFormResult {
  confirmado?: boolean;
  formvalue?: any;
}

@Component({
  selector: 'app-pago-dialog',
  templateUrl: './pedido-form.html',
  standalone: false,
  styleUrls: ['./pedido-form.css'],
})
export class PedidoForm {
  total = 0;

  // ¡No lo inicialices aquí!
  pedidoForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<PedidoForm>,
    @Inject(MAT_DIALOG_DATA) public data: { total: number }
  ) {
    this.total = data?.total ?? 0;
    this.initForm();
    this.setupTipoPagoWatchers();
  }

  private initForm() {
    this.pedidoForm = this.fb.group({
      direccion: ['', [Validators.required, Validators.minLength(3)]],
      tipoPago: ['', Validators.required],
      pago: this.fb.group({
        tarjeta: this.fb.group({
          numero: [''],
          vencimiento: [''],
          cvv: [''],
          nombre: [''],
        }),
        efectivo: this.fb.group({
          montoRecibido: [null],
        }),
      }),
    });
  }

  private setupTipoPagoWatchers() {
    const t = this.pedidoForm.get('pago.tarjeta') as FormGroup;
    const e = this.pedidoForm.get('pago.efectivo') as FormGroup;

    this.pedidoForm.get('tipoPago')!.valueChanges.subscribe((v) => {
      if (v === 'TARJETA') {
        t.get('numero')!.setValidators([
          Validators.required,
          Validators.pattern(/^\d{16}$/),
        ]);
        t.get('vencimiento')!.setValidators([
          Validators.required,
          Validators.pattern(/^(0[1-9]|1[0-2])\/\d{2}$/),
        ]);
        t.get('cvv')!.setValidators([
          Validators.required,
          Validators.pattern(/^\d{3}$/),
        ]);
        t.get('nombre')!.setValidators([
          Validators.required,
          Validators.minLength(3),
        ]);
        e.get('montoRecibido')!.clearValidators();
      } else if (v === 'EFECTIVO') {
        e.get('montoRecibido')!.setValidators([
          Validators.required,
          Validators.min(this.total),
        ]);
        t.reset();
        Object.values(t.controls).forEach((c) => c.clearValidators());
      } else {
        Object.values(t.controls).forEach((c) => c.clearValidators());
        e.get('montoRecibido')!.clearValidators();
      }
      t.updateValueAndValidity({ emitEvent: false });
      e.updateValueAndValidity({ emitEvent: false });
    });
  }

  get montoRecibido(): number {
    return (
      Number(this.pedidoForm.get('pago.efectivo.montoRecibido')?.value) || 0
    );
  }
  get vuelto(): number {
    const v = this.montoRecibido - this.total;
    return v >= 0 ? v : 0;
  }

  cancelar() {
    this.dialogRef.close({ confirmado: false });
  }

  confirmar() {
    if (this.pedidoForm.invalid) return;
    if (
      this.pedidoForm.value.tipoPago === 'EFECTIVO' &&
      this.montoRecibido < this.total
    )
      return;
    this.dialogRef.close({
      confirmado: true,
      formvalue: this.pedidoForm.value,
    });
  }
}

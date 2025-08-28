import { Component, computed } from '@angular/core';
import { getFormValidationErrorMessage } from '../../share/form-validation';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationService } from '../../share/notification-service';
import { AuthenticationService } from '../../share/authentication.service';

@Component({
  selector: 'app-user-login',
  standalone: false,
  templateUrl: './usuario-login.html',
  styleUrl: './usuario-login.css',
})
export class UsuarioLogin {
  hide = true;
  formulario!: FormGroup;
  makeSubmit: boolean = false;
  infoUsuario: any;

  constructor(
    public fb: FormBuilder,
    private notificacion: NotificationService,
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthenticationService
  ) {
    this.reactiveForm();
  }

  // Definir el formulario con su reglas de validación
  reactiveForm() {
    this.formulario = this.fb.group({
      correo: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  onReset() {
    this.formulario.reset();
  }
  submitForm() {
    this.makeSubmit = true;
    //Validación
    if (this.formulario.invalid) {
      return;
    }
    //Login
    //Obtener los datos del formulario
    const credentials = this.formulario.value;
    this.authService?.loginUser(credentials).subscribe({
      next: () => {
        this.notificacion.success(
          'Inicio de sesión',
          'Bienvenido',
          2000,
          '/inicio'
        );
      },
      error: (e) => {
        console.log('Error inicio de sesión ', e);
        let message = 'Error al iniciar sesión. Por favor, intente de nuevo';
        if (e.status === 401) {
          message = 'Credenciales incorrectas. Verifique su email y contraseña';
        }
        this.notificacion.error('Error de autenticación', message);
      },
    });
  }
  // Gestión de errores del formulario
  public errorHandling(controlPath: string): string | false {
    // Pasamos el formulario principal y la ruta del control
    return getFormValidationErrorMessage(this.formulario, controlPath);
  }
}

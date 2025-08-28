import { Component, computed } from '@angular/core';
import { NotificationService } from '../../share/notification-service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { getFormValidationErrorMessage } from '../../share/form-validation';

import { RolService } from '../../share/services/rol.service';
import { RoleModel } from '../../share/models/RoleModel';
import { passwordsMatchValidator } from '../../share/validators/password-match-validator';
import { AuthenticationService } from '../../share/authentication.service';

@Component({
  selector: 'app-usuario-create',
  standalone: false,
  templateUrl: './usuario-create.html',
  styleUrl: './usuario-create.css',
})
export class UsuarioCreate {
  hide = true;
  usuario: any;
  roles: any;
  formCreate!: FormGroup;
  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    public fb: FormBuilder,
    private router: Router,
    private rolService: RolService,
    private noti: NotificationService
  ) {
    this.reactiveForm();
  }

  authService?: AuthenticationService;
  currentUser = this.authService?.currentUserSignal;
  //Solo administrador
  public isAdmin = computed(() => {
    const user = this.authService?.currentUserSignal();
    // Retorna true solo si el usuario e
    return user?.role.valueOf() == 'ADMIN';
  });

  reactiveForm() {
    this.formCreate = this.fb.group(
      {
        nombre: ['', [Validators.required]],
        email: ['', [Validators.required]],
        password: ['', [Validators.required]],
        confirmpassword: ['', [Validators.required]],
        role: ['', [Validators.required]],
      },
      { validators: passwordsMatchValidator }
    );
    this.getRoles();
  }
  ngOnInit(): void {}
  submitForm() {
    this.formCreate.markAllAsTouched();
    //Validación
    if (this.formCreate.invalid) {
      return;
    }
    //Crear usuario
    this.router.navigate(['/usuario/login']);
  }
  
  onReset() {
    this.formCreate.reset();
  }
  getRoles() {
    this.rolService.get().subscribe((respuesta: RoleModel[]) => {
      this.roles = respuesta;
    });
  }
  /**
   * Gestión de errores del formulario
   */
  public errorHandling(controlPath: string): string | false {
    // Pasamos el formulario principal y la ruta del control
    return getFormValidationErrorMessage(this.formCreate, controlPath);
  }
}

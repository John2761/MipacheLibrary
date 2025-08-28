import { Component, computed, OnInit, Signal } from '@angular/core';
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
export class UsuarioCreate implements OnInit {
  hide = true;
  usuario: any;
  roles: RoleModel[]= [];
  formCreate!: FormGroup;
  destroy$: Subject<boolean> = new Subject<boolean>();

  currentUser?: Signal<any>;
  isAdmin?: Signal<boolean>;

  constructor(
    public fb: FormBuilder,
    private router: Router,
    private rolService: RolService,
    private noti: NotificationService,
    private authService: AuthenticationService
  ) {
    this.reactiveForm();
  }

  
  

  ngOnInit(): void {
    this.getRoles(); // Cargar roles cuando el componente inicia
    this.currentUser = this.authService.currentUserSignal;
    this.isAdmin = computed(() => {
    const user = this.authService.currentUserSignal();
    // Retorna true solo si el usuario e
    return user?.role.valueOf() == 'ADMIN';
  });

  }

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

  }

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
    this.rolService.get().subscribe({
      next: (roles) => {
      this.roles = roles;
    },
    error: (err) => {
      this.noti.error('Error', 'No se pudieron cargar los roles');
    }
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

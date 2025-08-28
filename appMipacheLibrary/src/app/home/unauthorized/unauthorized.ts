import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-unauthorized',
  standalone: false,
  templateUrl: './unauthorized.html',
  styleUrl: './unauthorized.css',
})
export class Unauthorized {
  constructor(private router: Router) {}
  ngOnInit(): void {}
  irInicio() {
    // Redireccionar a la ruta raíz
    this.router.navigate(['/']);
  }
   irLogin() {
    // Redireccionar a la ruta raíz
    this.router.navigate(['/usuario/login']);
  }
}

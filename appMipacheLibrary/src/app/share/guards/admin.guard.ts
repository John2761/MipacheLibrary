// src/app/share/guards/admin.guard.ts
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AdminGuard implements CanActivate {
  constructor(private router: Router) {}
  canActivate(): boolean {
    // Sustituir por lectura de tu JWT/usuario en un AuthService
    const role = localStorage.getItem('role'); // 'ADMIN' | 'CLIENTE'
    if (role === 'ADMIN') return true;
    this.router.navigate(['/']); // o página de "no autorizado"
    return false;
    }
}

import { Component, computed, inject, OnInit, Signal } from '@angular/core';
import { PedidoService } from '../../share/services/pedido.service';
import { AuthenticationService } from '../../share/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header  {
  private pedidoService= inject(PedidoService);
  private authService= inject(AuthenticationService);
  private router= inject(Router);

  isAuthenticated= this.authService.isAuthenticatedSignal;
  currentUser= this.authService.currentUserSignal;

  cantidadTotal: Signal<number>= this.pedidoService.totalCantidadSignal;

  public isAdmin= computed(() => {
    const user = this.authService.currentUserSignal();
    return user?.role?.toString() === 'ADMIN';
  });

  // Métodos
  login() {
    this.router.navigate(['usuario/login']);
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['inicio']);
  }

}

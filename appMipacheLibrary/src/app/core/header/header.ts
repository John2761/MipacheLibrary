import { Component, computed, inject, OnInit, Signal } from '@angular/core';
import { AuthenticationService } from '../../share/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header  {
  private authService= inject(AuthenticationService);
  private router= inject(Router);
  isAuthenticated= this.authService.isAuthenticatedSignal;
  currentUser= this.authService.currentUserSignal;

  public isAdmin= computed(() => {
    const user = this.authService.currentUserSignal();
    return user?.role?.toString() === 'ADMIN';
  });

    public isUser= computed(() => {
    const user = this.authService.currentUserSignal();
    return user?.role?.toString() === 'USER';
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

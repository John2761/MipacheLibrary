import { Component, computed, inject } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { AuthenticationService } from '../../share/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  standalone: false,
  templateUrl: './inicio.html',
  styleUrl: './inicio.css'
})

export class inicio {
  private authService= inject(AuthenticationService);
  private router= inject(Router);
  isAuthenticated= this.authService.isAuthenticatedSignal;
  currentUser= this.authService.currentUserSignal;

  public isAdmin= computed(() => {
    const user = this.authService.currentUserSignal();
    return user?.role?.toString() === 'ADMIN';
  });
}

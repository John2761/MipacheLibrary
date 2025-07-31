import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ResenaService } from '../../share/services/resena.service';

@Component({
  selector: 'app-resena-detail',
  templateUrl: './resena-detail.html',
  styleUrls: ['./resena-detail.css'],
  standalone: false,
})
export class ResenaDetail {
  resena: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private resenaService: ResenaService
  ) {
    const id = this.route.snapshot.paramMap.get('id');
    if (!isNaN(Number(id))) {
      this.cargarResena(Number(id));
    }
  }

  cargarResena(id: number) {
    this.resenaService.getById(id).subscribe({
      next: (data) => {
        this.resena = data;
      },
      error: (err) => {
        console.error('Error al cargar reseña', err);
        this.router.navigate(['/resena']);
      }
    });
  }
}

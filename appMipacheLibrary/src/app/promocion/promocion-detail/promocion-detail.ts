import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PromocionService } from '../../share/services/promocion.service';

@Component({
  selector: 'app-promocion-detail',
  standalone: false,
  templateUrl: './promocion-detail.html',
  styleUrl: './promocion-detail.css'
})
export class PromocionDetail {
promocion: any;

  constructor(
    private route: ActivatedRoute,
    private promocionService: PromocionService
  ) {}
}

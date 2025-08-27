// dashboard.ts
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {
  DashboardDTO,
  DashboardService,
} from '../../share/services/dashboard.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './dashboard-index.html',
  styleUrls: ['./dashboard-index.css'],
  encapsulation: ViewEncapsulation.None,
  standalone: false,
})
export class Dashboard implements OnInit {
  // ngx-charts data
  ventasDiaData: { name: string; value: number }[] = [];
  ventasMesData: { name: string; value: number }[] = [];
  estadoData: { name: string; value: number }[] = [];

  // tarjetas/listas
  top3 = [] as DashboardDTO['top3Productos'];
  resenas = [] as DashboardDTO['ultimasResenas'];

  // opciones visuales (puedes ajustarlas a gusto)
  view: [number, number] = [600, 260]; // ancho x alto

  constructor(private dash: DashboardService) {}

  ngOnInit(): void {
    this.dash.getSummary().subscribe({
      next: (d) => {
        console.log('DASH JSON =>', d);

        // defensivo por si alguna propiedad viene undefined
        const porDia = Array.isArray(d?.ventasPorDia) ? d.ventasPorDia : [];
        const porMes = Array.isArray(d?.ventasPorMes) ? d.ventasPorMes : [];
        const estados = Array.isArray(d?.pedidosPorEstado)
          ? d.pedidosPorEstado
          : [];

        // ← importante: convierte a números y usa labels 'name'
        this.ventasDiaData = porDia.map((r) => ({
          name:
            typeof r.fecha === 'string'
              ? r.fecha
              : new Date(r.fecha).toISOString().slice(0, 10),
          value: Number(r.ventas) || 0,
        }));

        this.ventasMesData = porMes.map((r) => ({
          name: `${String(r.mes).padStart(2, '0')}-${r.anio}`,
          value: Number(r.ventas) || 0,
        }));

        this.estadoData = estados.map((e) => ({
          name: String(e.estado),
          value: Number(e._count?._all ?? 0),
        }));

        this.top3 = d?.top3Productos ?? [];
        this.resenas = d?.ultimasResenas ?? [];

        // 🧪 fallback visible si vienen vacíos (evita chart “en blanco”)
        if (!this.ventasDiaData.length)
          this.ventasDiaData = [{ name: 'Sin datos', value: 0 }];
        if (!this.ventasMesData.length)
          this.ventasMesData = [{ name: 'Sin datos', value: 0 }];
        if (!this.estadoData.length)
          this.estadoData = [{ name: 'Sin datos', value: 0 }];
      },
      error: (err) => console.error('Error dashboard:', err),
    });
  }
}

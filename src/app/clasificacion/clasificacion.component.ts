import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EquipoClasificacion } from '../models/clasificacion.model';
import { ClasificacionService } from '../services/clasificacion.service';

@Component({
  selector: 'app-clasificacion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './clasificacion.component.html',
  styleUrls: ['./clasificacion.component.css'],
})
export class ClasificacionComponent implements OnInit {
  clasificacion: EquipoClasificacion[] = [];

  constructor(private clasificacionService: ClasificacionService) {}

  ngOnInit(): void {
    this.clasificacion = this.clasificacionService.getClasificacion();
  }

  getClassForPosition(posicion: number): string {
    if (posicion <= 2) {
      return 'ascenso-directo';
    } else if (posicion <= 5) {
      return 'playoff';
    } else if (posicion >= 9) {
      return 'descenso';
    }
    return '';
  }

  getFormaClass(resultado: string): string {
    switch (resultado) {
      case 'G':
        return 'bg-success';
      case 'E':
        return 'bg-warning text-dark';
      case 'P':
        return 'bg-danger';
      default:
        return 'bg-secondary';
    }
  }
}

import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RutinaGridComponent } from '../shared/rutina-grid/rutina-grid.component';
import { EntrenamientoService } from '../services/entrenamiento.service';
import { Rutina } from '../models/rutina.model';

@Component({
  selector: 'app-propiocepcion',
  standalone: true,
  imports: [CommonModule, RutinaGridComponent],
  templateUrl: './propiocepcion.component.html',
  styleUrl: './propiocepcion.component.css',
})
export class PropiocepcionComponent {
  private entrenamientoService = inject(EntrenamientoService);
  // Carga las rutinas de Propiocepción
  rutinas: Rutina[] = this.entrenamientoService.getPropiocepcionRutinas();
}

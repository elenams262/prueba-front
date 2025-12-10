import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RutinaGridComponent } from '../shared/rutina-grid/rutina-grid.component';
import { EntrenamientoService } from '../../services/entrenamiento.service';
import { Rutina } from '../../models/rutina.model';

@Component({
  selector: 'app-resistencia',
  standalone: true,
  imports: [CommonModule, RutinaGridComponent],
  templateUrl: './resistencia.component.html',
  styleUrl: './resistencia.component.css',
})
export class ResistenciaComponent {
  private entrenamientoService = inject(EntrenamientoService);
  // Carga las rutinas de Resistencia
  rutinas: Rutina[] = this.entrenamientoService.getResistenciaRutinas();
}

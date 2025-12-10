import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RutinaGridComponent } from '../shared/rutina-grid/rutina-grid.component';
import { EntrenamientoService } from '../../services/entrenamiento.service';
import { Rutina } from '../../models/rutina.model';

@Component({
  selector: 'app-velocidad',
  standalone: true,
  imports: [CommonModule, RutinaGridComponent], // Reutiliza el componente Grid
  templateUrl: './velocidad.component.html',
  styleUrl: './velocidad.component.css',
})
export class VelocidadComponent {
  // Inyección del servicio para obtener datos
  private entrenamientoService = inject(EntrenamientoService);
  // Carga las rutinas de Velocidad
  rutinas: Rutina[] = this.entrenamientoService.getVelocidadRutinas();
}

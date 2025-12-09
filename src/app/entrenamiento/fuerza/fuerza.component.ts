import { Component, inject } from '@angular/core'; // Importa inject para la inyección de dependencias moderna
import { CommonModule } from '@angular/common';
// Importa el componente compartido de la cuadrícula
import { RutinaGridComponent } from '../shared/rutina-grid/rutina-grid.component';
// Importa el servicio centralizado
import { EntrenamientoService } from '../services/entrenamiento.service';
import { Rutina } from '../models/rutina.model';

@Component({
  selector: 'app-fuerza', // Selector del componente
  standalone: true, // Componente autónomo
  imports: [CommonModule, RutinaGridComponent], // Declara que usará el componente compartido Grid
  templateUrl: './fuerza.component.html',
  styleUrl: './fuerza.component.css',
})
export class FuerzaComponent {
  // Inyecta el servicio de entrenamiento utilizando la función inject()
  private entrenamientoService = inject(EntrenamientoService);

  // Obtiene los datos específicos de fuerza llamando al método del servicio
  rutinas: Rutina[] = this.entrenamientoService.getFuerzaRutinas();
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, RouterOutlet } from '@angular/router'; // Importar Router y RouterModule
// Opcionalmente, importar las interfaces si se usan en este componente
// import { Rutina } from '../fuerza/fuerza.component';

@Component({
  selector: 'app-entrenamiento',
  standalone: true,
  // Asegúrate de importar RouterModule y RouterOutlet
  imports: [CommonModule, RouterModule, RouterOutlet],
  templateUrl: './entrenamiento.component.html',
  styleUrl: './entrenamiento.component.css',
})
export class EntrenamientoComponent {}

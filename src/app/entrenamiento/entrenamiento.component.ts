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
export class EntrenamientoComponent {
  // 1. Inyectar el Router en el constructor
  constructor(public router: Router) {}

  // 2. Función para determinar si mostrar las imágenes
  // Las imágenes solo se muestran si la URL es EXACTAMENTE '/entrenamiento-extra'
  // Si es '/entrenamiento-extra/fuerza', retorna false.
  mostrarImagenes(): boolean {
    // La propiedad 'url' del Router devuelve la URL actual.
    // Comparamos si es la ruta base del componente padre.
    return this.router.url === '/entrenamiento-extra';
  }

  // Las rutinas de ejemplo que tenías ya no son necesarias si solo usas este componente como un layout para los hijos.
  // ...
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Rutina {
  titulo: string;
  nivel: 'Básico' | 'Intermedio' | 'Avanzado';
  duracion: string;
  descripcion: string;
  imagen: string;
  ejercicios: string[];
}

@Component({
  selector: 'app-propiocepcion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './propiocepcion.component.html',
  styleUrl: './propiocepcion.component.css',
})
export class PropiocepcionComponent {
  rutinas: Rutina[] = [
    {
      titulo: 'Estabilidad y Equilibrio Estático',
      nivel: 'Básico',
      duracion: '30 min',
      descripcion:
        'Fundamentos del equilibrio para fortalecer tobillos, rodillas y mejorar la postura.',
      imagen: 'assets/entrenamiento/propiocepcion-1.jpg',
      ejercicios: [
        'Apoyo monopodal (3x30s/pierna)',
        'Caminata talón-punta (3x10m)',
        'Elevación de talones (3x15)',
        'Plancha con elevación de brazo/pierna opuesta (3x30s)',
      ],
    },
    {
      titulo: 'Control Dinámico y Superficies Inestables',
      nivel: 'Intermedio',
      duracion: '45 min',
      descripcion: 'Retos de equilibrio en movimiento para mejorar la coordinación neuromuscular.',
      imagen: 'assets/entrenamiento/propiocepcion-2.jpg',
      ejercicios: [
        'Sentadilla a una pierna (pistol asistida) (3x8/pierna)',
        'Peso muerto a una pierna (3x10/pierna)',
        'Saltos con aterrizaje estable (3x10)',
        'Zancada con rotación de tronco (3x12)',
      ],
    },
    {
      titulo: 'Coordinación Reactiva y Compleja',
      nivel: 'Avanzado',
      duracion: '60 min',
      descripcion:
        'Ejercicios de alta complejidad cognitiva y motora para el máximo control corporal.',
      imagen: 'assets/entrenamiento/propiocepcion-3.jpg',
      ejercicios: [
        'Saltos multidireccionales con estabilización (4x1 min)',
        'Equilibrio con ojos cerrados (variaciones) (3x45s)',
        'Drills de reacción a señales visuales',
        'Lanzamiento y recepción de pelota sobre base inestable',
      ],
    },
  ];
}

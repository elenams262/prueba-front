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
  selector: 'app-fuerza',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './fuerza.component.html',
  styleUrl: './fuerza.component.css',
})
export class FuerzaComponent {
  rutinas: Rutina[] = [
    {
      titulo: 'Introducción a la Fuerza (Core y Tren Inferior)',
      nivel: 'Básico',
      duracion: '30 min',
      descripcion:
        'Enfocada en el aprendizaje de la técnica y la activación muscular general con peso corporal.',
      imagen: 'assets/entrenamiento/fuerza-1.jpg', // Imagen de alguien haciendo ejercicio de fuerza ligero
      ejercicios: [
        'Sentadillas (3x15)',
        'Plancha frontal (3x60s)',
        'Puente de glúteo (3x12)',
        'Flexiones asistidas (3x10)',
      ],
    },
    {
      titulo: 'Fuerza Funcional y Resistencia Muscular',
      nivel: 'Intermedio',
      duracion: '45 min',
      descripcion:
        'Uso de pesas ligeras/medias y ejercicios compuestos para aumentar la resistencia y la hipertrofia inicial.',
      imagen: 'assets/entrenamiento/fuerza-2.jpg', // Imagen de alguien levantando pesas ligeras
      ejercicios: [
        'Press militar con mancuernas (3x10)',
        'Zancadas con peso (3x10/pierna)',
        'Remo con barra (3x12)',
        'Peso muerto rumano (3x10)',
      ],
    },
    {
      titulo: 'Hipertrofia y Máxima Potencia',
      nivel: 'Avanzado',
      duracion: '60 min',
      descripcion:
        'Levantamiento de cargas pesadas y técnicas avanzadas para desarrollar la máxima potencia y masa muscular.',
      imagen: 'assets/entrenamiento/fuerza-3.jpg', // Imagen de levantamiento de pesas pesadas
      ejercicios: [
        'Sentadilla trasera (5x5)',
        'Bench Press (5x5)',
        'Dominadas lastradas (3x fallo)',
        'Clean & Jerk o Burpees con peso',
      ],
    },
  ];
}

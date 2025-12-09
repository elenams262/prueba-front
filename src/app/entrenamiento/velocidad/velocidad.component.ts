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
  selector: 'app-velocidad',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './velocidad.component.html',
  styleUrl: './velocidad.component.css',
})
export class VelocidadComponent {
  rutinas: Rutina[] = [
    {
      titulo: 'Iniciación a la Velocidad y Agilidad',
      nivel: 'Básico',
      duracion: '30 min',
      descripcion:
        'Introducción a la técnica de carrera y ejercicios de agilidad básica para mejorar la coordinación.',
      imagen: 'assets/entrenamiento/velocidad-1.jpg',
      ejercicios: [
        'Skipping bajo y alto (3x30s)',
        'Escalera de agilidad básica (3 pasadas)',
        'Sprints cortos (5x20m)',
        'Saltos laterales (3x15)',
      ],
    },
    {
      titulo: 'Explosividad y Aceleración',
      nivel: 'Intermedio',
      duracion: '45 min',
      descripcion:
        'Enfoque en la potencia de salida y la aceleración en distancias cortas e intermedias.',
      imagen: 'assets/entrenamiento/velocidad-2.jpg',
      ejercicios: [
        'Salidas de velocidad desde parado (6x30m)',
        'Saltos al cajón (Box Jumps) (4x10)',
        'Sprints con resistencia (paracaídas/goma) (4x20m)',
        'Cambios de dirección (Shuttle Runs) (4x10m)',
      ],
    },
    {
      titulo: 'Velocidad Máxima y Resistencia Anaeróbica',
      nivel: 'Avanzado',
      duracion: '60 min',
      descripcion:
        'Entrenamiento de alta intensidad para mejorar la velocidad punta y la capacidad de mantenerla.',
      imagen: 'assets/entrenamiento/velocidad-3.jpg',
      ejercicios: [
        'Sprints lanzados (5x60m)',
        'Multisaltos a una pierna (3x10/pierna)',
        'Series de resistencia a la velocidad (3x150m)',
        'Trabajo de reacción y velocidad visual',
      ],
    },
  ];
}

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
  selector: 'app-resistencia',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './resistencia.component.html',
  styleUrl: './resistencia.component.css',
})
export class ResistenciaComponent {
  rutinas: Rutina[] = [
    {
      titulo: 'Base Aeróbica y Constancia',
      nivel: 'Básico',
      duracion: '30 min',
      descripcion:
        'Mejora tu capacidad cardiovascular con ejercicios de intensidad moderada y continua.',
      imagen: 'assets/entrenamiento/resistencia-1.jpg',
      ejercicios: [
        'Trote suave continuo (20 min)',
        'Saltos de tijera (Jumping Jacks) (3x1 min)',
        'Burpees modificados (sin flexión) (3x10)',
        'Escaladores (Mountain Climbers) (3x30s)',
      ],
    },
    {
      titulo: 'Resistencia Interválica (HIIT)',
      nivel: 'Intermedio',
      duracion: '45 min',
      descripcion:
        'Entrenamiento de intervalos de alta intensidad para quemar grasa y mejorar el VO2 máx.',
      imagen: 'assets/entrenamiento/resistencia-2.jpg',
      ejercicios: [
        'Sprint 30s / Descanso 30s (x10)',
        'Burpees completos (4x15)',
        'Saltos a la cuerda (3x2 min)',
        'Sentadilla con salto (3x20)',
      ],
    },
    {
      titulo: 'Resistencia de Élite y Fondo',
      nivel: 'Avanzado',
      duracion: '60+ min',
      descripcion:
        'Desafío de larga duración y alta exigencia para atletas que buscan superar sus límites.',
      imagen: 'assets/entrenamiento/resistencia-3.jpg',
      ejercicios: [
        'Carrera a ritmo de umbral (40 min)',
        'Circuito metabólico (MetCon) (5 rondas)',
        'Remo o Natación de alta intensidad (20 min)',
        'Carrera con cuestas (10x100m)',
      ],
    },
  ];
}

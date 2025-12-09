import { Injectable } from '@angular/core';
import { Rutina } from '../models/rutina.model';

@Injectable({
  providedIn: 'root',
})
export class EntrenamientoService {
  getFuerzaRutinas(): Rutina[] {
    return [
      {
        titulo: 'Introducción a la Fuerza (Core y Tren Inferior)',
        nivel: 'Básico',
        duracion: '30 min',
        descripcion:
          'Enfocada en el aprendizaje de la técnica y la activación muscular general con peso corporal.',
        imagen: 'assets/entrenamiento/fuerza-1.jpg',
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
        imagen: 'assets/entrenamiento/fuerza-2.jpg',
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
        imagen: 'assets/entrenamiento/fuerza-3.jpg',
        ejercicios: [
          'Sentadilla trasera (5x5)',
          'Bench Press (5x5)',
          'Dominadas lastradas (3x fallo)',
          'Clean & Jerk o Burpees con peso',
        ],
      },
    ];
  }

  getVelocidadRutinas(): Rutina[] {
    return [
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

  getResistenciaRutinas(): Rutina[] {
    return [
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

  getPropiocepcionRutinas(): Rutina[] {
    return [
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
        descripcion:
          'Retos de equilibrio en movimiento para mejorar la coordinación neuromuscular.',
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
}

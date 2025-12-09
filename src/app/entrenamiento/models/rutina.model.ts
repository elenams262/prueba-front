// Define la estructura de datos para una rutina de entrenamiento
export interface Rutina {
  // El título o nombre principal de la rutina
  titulo: string;
  // El nivel de dificultad, restringido a tres opciones específicas
  nivel: 'Básico' | 'Intermedio' | 'Avanzado';
  // El tiempo estimado que toma completar la rutina
  duracion: string;
  // Una breve explicación de en qué consiste el entrenamiento
  descripcion: string;
  // La ruta (path) a la imagen ilustrativa de la rutina
  imagen: string;
  // Una lista (array) de nombres de ejercicios que componen la rutina
  ejercicios: string[];
}

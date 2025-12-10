import { Injectable } from '@angular/core';
import { Noticia } from '../models/noticias.model';

@Injectable({
  providedIn: 'root',
})
export class NoticiasService {
  constructor() {}

  getNoticias(): Noticia[] {
    return [
      {
        id: 1,
        titulo: 'Nueva Temporada 2025',
        descripcion: 'Comienza la inscripción para la nueva temporada. ¡No te quedes sin tu plaza!',
        contenido:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        imagen: 'assets/noticias/temporada2025.jpg',
        fecha: new Date('2025-09-01'),
        categoria: 'Club',
      },
      {
        id: 2,
        titulo: 'Victoria del Juvenil A',
        descripcion:
          'El equipo juvenil logró una importante victoria este fin de semana contra el líder.',
        contenido:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        imagen: 'assets/noticias/victoria-juvenil.jpg',
        fecha: new Date('2025-10-15'),
        categoria: 'Partidos',
      },
      {
        id: 3,
        titulo: 'Reformas en el Estadio',
        descripcion: 'Se han completado las obras de mejora en las gradas y vestuarios.',
        contenido:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        imagen: 'assets/noticias/estadio.jpg',
        fecha: new Date('2025-08-20'),
        categoria: 'Instalaciones',
      },
      // Añade más noticias aquí
    ];
  }
}

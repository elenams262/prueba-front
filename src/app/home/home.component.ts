import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink } from '@angular/router';

// 💡 1. Importación corregida (asumiendo player.model.ts)
import { Player } from '../models/player.model';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  // 💡 2. Signal tipificado como Player[] para forzar el cumplimiento de la interfaz
  playerSquad = signal<Player[]>([
    {
      name: 'Sofía García',
      dorsal: 10,
      posicion: 'Mediocampista',
      photoUrl: 'assets/jugadoras/sofia_foto.jpg',
      videoUrl: 'assets/jugadoras/sofia_video.mp4',
    },
    {
      name: 'Elena Pérez',
      dorsal: 5,
      posicion: 'Defensa Central',
      photoUrl: 'assets/jugadoras/elena_foto.jpg',
      videoUrl: 'assets/jugadoras/elena_video.mp4',
    },
    {
      name: 'Carla Ruiz',
      dorsal: 1,
      posicion: 'Portera',
      photoUrl: 'assets/jugadoras/carla_foto.jpg',
      videoUrl: 'assets/jugadoras/carla_video.mp4',
    },
    {
      name: 'María López',
      dorsal: 7,
      posicion: 'Delantera',
      photoUrl: 'assets/jugadoras/maria_foto.jpg',
      videoUrl: 'assets/jugadoras/maria_video.mp4',
    },
    {
      name: 'Lucía Castro',
      dorsal: 8,
      posicion: 'Pivote',
      photoUrl: 'assets/jugadoras/lucia_foto.jpg',
      videoUrl: 'assets/jugadoras/lucia_video.mp4',
    },
    {
      name: 'Ana Torres',
      dorsal: 3,
      posicion: 'Lateral',
      photoUrl: 'assets/jugadoras/ana_foto.jpg',
      videoUrl: 'assets/jugadoras/ana_video.mp4',
    },
    {
      name: 'Paula Gómez',
      dorsal: 11,
      posicion: 'Extremo',
      photoUrl: 'assets/jugadoras/paula_foto.jpg',
      videoUrl: 'assets/jugadoras/paula_video.mp4',
    },
    {
      name: 'Andrea Vidal',
      dorsal: 4,
      posicion: 'Defensa Lateral',
      photoUrl: 'assets/jugadoras/andrea_foto.jpg',
      videoUrl: 'assets/jugadoras/andrea_video.mp4',
    },
    {
      name: 'Irene Montes',
      dorsal: 9,
      posicion: 'Mediapunta',
      photoUrl: 'assets/jugadoras/irene_foto.jpg',
      videoUrl: 'assets/jugadoras/irene_video.mp4',
    },
    {
      name: 'Sara Gil',
      dorsal: 12,
      posicion: 'Defensa Central',
      photoUrl: 'assets/jugadoras/sara_foto.jpg',
      videoUrl: 'assets/jugadoras/sara_video.mp4',
    },
  ]);
}

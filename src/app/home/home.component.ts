import { Component, OnInit, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink } from '@angular/router';

// 💡 1. Importación corregida (asumiendo player.model.ts)
import { Player } from '../models/player.model';
import { MerchandisingComponent } from '../merchandising/merchandising.component';
import { PlayerCardComponent } from './player-card/player-card.component';
import { PlayerService } from '../services/player.service';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, MerchandisingComponent, PlayerCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  // 💡 2. Signal tipificado como Player[] para forzar el cumplimiento de la interfaz

  playerSquad = signal<Player[]>([]);
  private playerService = inject(PlayerService);

  ngOnInit() {
    this.playerSquad.set(this.playerService.getPlayers());
  }
}

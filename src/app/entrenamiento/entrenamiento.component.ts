import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-entrenamiento',
  imports: [CommonModule, RouterOutlet, RouterLink],
  templateUrl: './entrenamiento.component.html',
  styleUrl: './entrenamiento.component.css',
})
export class EntrenamientoComponent {}

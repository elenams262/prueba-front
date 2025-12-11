import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-entrenamiento',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './entrenamiento.component.html',
  styleUrls: ['./entrenamiento.component.css'],
})
export class EntrenamientoComponent {}

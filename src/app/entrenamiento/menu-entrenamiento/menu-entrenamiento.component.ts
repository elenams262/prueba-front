import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-menu-entrenamiento',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './menu-entrenamiento.component.html',
  styleUrls: ['./menu-entrenamiento.component.css'],
})
export class MenuEntrenamientoComponent {}

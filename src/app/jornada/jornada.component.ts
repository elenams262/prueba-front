import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-jornada',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
  templateUrl: './jornada.component.html',
  styleUrl: './jornada.component.css',
})
export class JornadaComponent {}

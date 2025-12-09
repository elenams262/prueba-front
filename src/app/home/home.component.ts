import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importa CommonModule si usas standalone
import { RouterOutlet, RouterLink } from '@angular/router'; // Opcional, si lo vas a usar

@Component({
  selector: 'app-inicio',
  standalone: true, // Si estás usando componentes standalone
  imports: [CommonModule, RouterOutlet, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}

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
export class HomeComponent {
  paulaImage: string = 'assets/imagenes/paula-1.png';
  private intervalId: any;
  private currentImageIndex: number = 1;

  startImageRotation() {
    this.intervalId = setInterval(() => {
      this.currentImageIndex = (this.currentImageIndex % 3) + 1; // Cycle 1, 2, 3
      this.paulaImage = `assets/imagenes/paula-${this.currentImageIndex}.png`;
    }, 1000); // Change every 1 second
  }

  stopImageRotation() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
    this.paulaImage = 'assets/imagenes/paula-1.png'; // Reset to default
    this.currentImageIndex = 1;
  }
}

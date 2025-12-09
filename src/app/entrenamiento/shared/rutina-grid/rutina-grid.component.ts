import { Component, Input } from '@angular/core'; // Importa Component y Input desde el núcleo de Angular
import { CommonModule } from '@angular/common'; // Importa módulos comunes como ngIf y ngFor
import { Rutina } from '../../models/rutina.model'; // Importa la definición de nuestro modelo de datos

@Component({
  selector: 'app-rutina-grid', // El nombre de la etiqueta HTML para usar este componente: <app-rutina-grid>
  standalone: true, // Indica que es un componente autónomo (no necesita NgModule)
  imports: [CommonModule], // Importa las dependencias necesarias para la plantilla
  templateUrl: './rutina-grid.component.html', // Archivo HTML asociado
  styleUrl: './rutina-grid.component.css', // Archivo CSS asociado
})
export class RutinaGridComponent {
  // @Input permite que el componente padre (como FuerzaComponent) pase datos a este componente hijo
  @Input() title: string = ''; // Título que se mostrará en la cabecera
  @Input() subtitle: string = ''; // Subtítulo descriptivo
  @Input() rutinas: Rutina[] = []; // La lista de rutinas a renderizar (las cartas)
  @Input() theme: 'primary' | 'warning' | 'danger' | 'info' = 'primary'; // Tema de color (por defecto azul 'primary')
}

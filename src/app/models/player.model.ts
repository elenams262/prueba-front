import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// 💡 La interfaz debe estar aquí, a nivel raíz del archivo
export interface Player {
  name: string;
  dorsal: number;
  posicion: string;
  photoUrl: string;
  videoUrl: string;
}

@NgModule({
  declarations: [],
  imports: [CommonModule],
})
export class PlayerModule {
  // 💡 El cuerpo de la clase ahora está vacío (o contiene constructores/métodos)
}

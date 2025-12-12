import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class MerchandisingService {
  getProductos(): Product[] {
    return [
      {
        id: 1,
        nombre: 'Camiseta Oficial 1ª Equipación',
        precio: 45.0,
        imagen: 'assets/imagenes/camiseta-jugador.jpeg',
        descripcion: 'Camiseta oficial de la primera equipación temporada 2025/26. Color amarillo.',
      },
      {
        id: 2,
        nombre: 'Camiseta Oficial Portero',
        precio: 45.0,
        imagen: 'assets/imagenes/camiseta-portero.jpeg',
        descripcion: 'Camiseta oficial de la equipación portero. Color rojo.',
      },
      {
        id: 3,
        nombre: 'Bufanda U.D. Villalba',
        precio: 15.0,
        imagen: 'assets/imagenes/bufanda.jpeg',
        descripcion: 'Bufanda de lana con el escudo y los colores del club. ¡Anima a tu equipo!',
      },
    ];
  }
}

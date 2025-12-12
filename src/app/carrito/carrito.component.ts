import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CarritoService } from './carrito.service';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-carrito',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.css',
})
export class CarritoComponent implements OnInit {
  private carritoService = inject(CarritoService);
  items: Product[] = [];
  total: number = 0;

  ngOnInit(): void {
    this.carritoService.items$.subscribe((items) => {
      this.items = items;
      this.total = this.carritoService.getTotal();
    });
  }

  eliminar(item: Product) {
    this.carritoService.removeFromCart(item);
  }

  vaciar() {
    this.carritoService.clearCart();
  }
}

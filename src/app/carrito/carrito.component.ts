import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarritoService } from './carrito.service';

@Component({
  selector: 'app-carrito',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.css',
})
export class CarritoComponent implements OnInit {
  private carritoService = inject(CarritoService);
  items: any[] = [];
  total: number = 0;

  ngOnInit(): void {
    this.carritoService.items$.subscribe((items) => {
      this.items = items;
      this.total = this.carritoService.getTotal();
    });
  }

  eliminar(item: any) {
    this.carritoService.removeFromCart(item);
  }

  vaciar() {
    this.carritoService.clearCart();
  }
}

import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MerchandisingService } from '../services/merchandising.service';
import { CarritoService } from '../carrito/carrito.service';

@Component({
  selector: 'app-merchandising',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './merchandising.component.html',
  styleUrl: './merchandising.component.css',
})
export class MerchandisingComponent implements OnInit {
  private merchandisingService = inject(MerchandisingService);
  private carritoService = inject(CarritoService);
  productos: any[] = [];

  ngOnInit(): void {
    this.productos = this.merchandisingService.getProductos();
  }

  agregarAlCarrito(producto: any) {
    this.carritoService.addToCart(producto);
    alert('Producto añadido al carrito');
  }
}

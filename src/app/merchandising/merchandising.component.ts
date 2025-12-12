import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MerchandisingService } from '../services/merchandising.service';
import { CarritoService } from '../carrito/carrito.service';
import { Product } from '../models/product.model';

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
  productos: Product[] = [];

  ngOnInit(): void {
    this.productos = this.merchandisingService.getProductos();
  }

  agregarAlCarrito(producto: Product) {
    this.carritoService.addToCart(producto);
    alert('Producto añadido al carrito');
  }
}

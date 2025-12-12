import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class CarritoService {
  private items: Product[] = [];
  private cartSubject = new BehaviorSubject<Product[]>([]);

  public items$ = this.cartSubject.asObservable();

  addToCart(product: Product) {
    this.items.push(product);
    this.cartSubject.next(this.items);
  }

  removeFromCart(product: Product) {
    const index = this.items.indexOf(product);
    if (index > -1) {
      this.items.splice(index, 1);
      this.cartSubject.next(this.items);
    }
  }

  getItems(): Product[] {
    return this.items;
  }

  clearCart() {
    this.items = [];
    this.cartSubject.next(this.items);
    return this.items;
  }

  getTotal(): number {
    return this.items.reduce((total, item) => total + item.precio, 0);
  }
}

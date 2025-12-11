import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CarritoService {
  private items: any[] = [];
  private cartSubject = new BehaviorSubject<any[]>([]);

  public items$ = this.cartSubject.asObservable();

  addToCart(product: any) {
    this.items.push(product);
    this.cartSubject.next(this.items);
  }

  removeFromCart(product: any) {
    const index = this.items.indexOf(product);
    if (index > -1) {
      this.items.splice(index, 1);
      this.cartSubject.next(this.items);
    }
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    this.cartSubject.next(this.items);
    return this.items;
  }

  getTotal() {
    return this.items.reduce((total, item) => total + item.precio, 0);
  }
}

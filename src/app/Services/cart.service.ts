import { Product } from 'src/app/Models/product';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartList = new EventEmitter<Product>();
  cartProducts: Product[] = [];

  constructor() {}

  getCartListProducts() {
    return this.cartProducts;
  }

  addToCart(product: Product): void {
    let item = this.cartProducts.find((p) => p.id == product.id);
    if (!item) {
      this.cartList.emit(product);
      this.cartProducts.push(product);
    } else {
      this.cartProducts.forEach((p) => {
        if (p.id == product.id && p.quantity && product.quantity) {
          p.quantity += product.quantity;
        }
      });
    }
  }
}

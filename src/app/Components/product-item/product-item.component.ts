import { Product } from './../../Models/product';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CartService } from 'src/app/Services/cart.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product;
  @Output() addProductToCart = new EventEmitter<Product>();
  selected: number = 1;
  options: number[] = [1, 2, 3, 4, 5, 6, 7];

  constructor(private cartService: CartService) {
    this.product = {
      id: 0,
      name: '',
      price: 0,
      url: '',
      description: '',
    };
  }

  ngOnInit(): void {}

  addToCart() {
    this.product.quantity = Number(this.selected);
    this.addProductToCart.emit(this.product);
  }
}

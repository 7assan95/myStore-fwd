import { CartService } from 'src/app/Services/cart.service';
import { ProductService } from './../../Services/product.service';
import { Product } from './../../Models/product';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  constructor(
    private productService: ProductService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((res) => {
      this.products = res;
    });
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
    alert('Added to cart!');
  }
}

import { CartService } from './../../Services/cart.service';
import { Product } from './../../Models/product';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ProductService } from './../../Services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  id: number = 0;
  product: Product;
  selected: number = 1;
  options: number[] = [1, 2, 3, 4, 5, 6, 7, 8];

  constructor(
    private route: Router,
    private productService: ProductService,
    private activatedRoute: ActivatedRoute,
    private cartService: CartService
  ) {
    this.product = {
      id: 0,
      name: '',
      price: 0,
      url: '',
      description: '',
    };
  }

  ngOnInit(): void {
    this.id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.productService.getProductById(this.id).subscribe((res) => {
      this.product = res;
    });
  }

  addToCart() {
    this.product.quantity = +this.selected;
    this.cartService.addToCart(this.product);
    alert('Added to cart!');
  }

  onBack(): void {
    this.route.navigate(['products']);
  }
}

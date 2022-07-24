import { Product } from 'src/app/Models/product';
import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/Services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  cartList: Product[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    console.log(
      this.cartService.cartList.subscribe((res) => {
        this.cartList.push(res);
      })
    );
  }
}

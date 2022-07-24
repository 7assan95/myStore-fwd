import { UserService } from './../../Services/user.service';
import { User } from './../../Models/user';
import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/Services/cart.service';
import { Product } from 'src/app/Models/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartList: Product[] = [];
  Price: number = 0;
  fName: string = '';
  address: string = '';
  card: string = '';
  user: User;

  constructor(
    private cartService: CartService,
    private route: Router,
    private userService: UserService
  ) {
    this.user = {
      id: 0,
      name: '',
      address: '',
      card: '',
      price: 0,
    };
  }

  ngOnInit(): void {
    this.cartList = this.cartService.getCartListProducts();
    this.calcTotalPrice();
  }

  calcTotalPrice() {
    this.cartList.forEach((p) => {
      if (p.quantity) {
        this.Price += p.price * p.quantity;
      } else {
        this.Price;
      }
    });
  }

  changeQuantity(item: any, e: any) {
    item.quantity = e.target.value;
    this.Price = 0;
    this.calcTotalPrice();
  }

  submitForm() {
    this.user.price = this.Price;
    this.userService.addUser(this.user);
    this.route.navigate(['confirmation']);
  }

  fNameChanged() {
    this.user.name = this.fName;
  }

  addressChanged() {
    this.user.address = this.address;
  }

  cardChanged() {
    this.user.card = this.card;
  }
}

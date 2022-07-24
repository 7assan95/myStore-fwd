import { Injectable } from '@angular/core';
import { User } from '../Models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user:User;

  constructor() {
    this.user={
      id:0,
      name:"",
      address: "",
      card: "",
      price: 0,
    }
   }

  addUser(user:User){
    this.user=user;
  }

  getUser(){
    return this.user;
  }
}

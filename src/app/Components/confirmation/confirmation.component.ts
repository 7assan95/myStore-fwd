import { UserService } from './../../Services/user.service';
import { User } from './../../Models/user';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css'],
})
export class ConfirmationComponent implements OnInit {
  user: User;
  constructor(private route: Router, private userService: UserService) {
    this.user = {
      id: 0,
      name: '',
      address: '',
      card: '',
      price: 0,
    };
  }

  ngOnInit(): void {
    this.user = this.userService.getUser();
  }

  onBack(): void {
    this.route.navigate(['products']);
  }
}

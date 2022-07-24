import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductListComponent } from './Components/product-list/product-list.component';
import { CartComponent } from './Components/cart/cart.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import {ConfirmationComponent} from './Components/confirmation/confirmation.component';

const routes: Routes = [
  {path: "",redirectTo:"products",pathMatch:"full"},
  {path: 'products',component:ProductListComponent},
  {path: 'Cart',component:CartComponent},
  {path:'Details/:id',component:ProductDetailsComponent},
  {path:'confirmation',component:ConfirmationComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

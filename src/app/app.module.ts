import { faCartShopping , faArrowLeft } from './../../node_modules/@fortawesome/free-solid-svg-icons';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { ProductListComponent } from './Components/product-list/product-list.component';
import { CartComponent } from './Components/cart/cart.component';
import { ProductItemComponent } from './Components/product-item/product-item.component';
import { FontAwesomeModule , FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { ConfirmationComponent } from './Components/confirmation/confirmation.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductListComponent,
    CartComponent,
    ProductItemComponent,
    ProductDetailsComponent,
    ConfirmationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
   constructor( library : FaIconLibrary){
   library.addIcons(faCartShopping,faArrowLeft)
   }
 }

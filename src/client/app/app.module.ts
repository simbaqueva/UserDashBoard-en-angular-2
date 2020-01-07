import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { BanlineaProductsModule } from './Components/banlinea-products/banlinea-products.module'
import { DetailsProductsModule } from './Components/details-products/details-products.module'

@NgModule({
  imports: 
  [
    BrowserModule, 
    HttpModule, 
    AppRoutingModule, 
    BanlineaProductsModule,
    DetailsProductsModule
  ],
  declarations: [AppComponent],
  providers: [{
    provide: APP_BASE_HREF,
    useValue: '<%= APP_BASE %>'
  }],
  bootstrap: [AppComponent]

})
export class AppModule { }

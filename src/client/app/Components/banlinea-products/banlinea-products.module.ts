import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ProductRouting } from './products-app/product-routing.module';

import { HeaderComponent } from './header-app/header-component/header-component.component';
import { HeaderProfileComponent } from './header-app/header-component/header-profile/header-profile.component';
import { TableHeadersComponent } from './products-app/table-headers/table-headers.component';
import { TableContentComponent } from './products-app/table-content/table-content.component';

import { ProductService } from './products-app/services/product-service/product-service.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ProductRouting
  ],
  providers: [
    ProductService
  ],
  declarations: [
    HeaderComponent,
    HeaderProfileComponent,
    TableHeadersComponent,
    TableContentComponent
  ],
  exports: [
    HeaderComponent,
    HeaderProfileComponent,
    TableHeadersComponent,
    TableContentComponent
  ]
})
export class BanlineaProductsModule { }

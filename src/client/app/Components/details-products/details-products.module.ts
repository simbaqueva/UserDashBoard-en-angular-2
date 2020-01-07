import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DetailsService } from './container-details/services/details.service';
import { ProductService } from '../banlinea-products/products-app/services/product-service/product-service.service';
import { MyDatePickerModule } from 'mydatepicker';

import { ContainerRouting } from './container-details/container-routing.module';

import { ContainerDetailsComponent } from './container-details/container-details.component';
import { StatusDetailsComponent } from './container-details/status/status-details.component';
import { StatusContentComponent } from './container-details/status/status-content/status-content.component';
import { MovementContentComponent } from './container-details/content/movement-content/movement-content.component';
import { MovementTableComponent } from './container-details/content/movement-content/movement-table/movement-table.component';
import { ExtractButtonComponent } from './container-details/content/extract-button.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ContainerRouting,
    MyDatePickerModule
  ],
  providers: [ProductService, DetailsService],
  declarations: [ 
    ContainerDetailsComponent,
    StatusDetailsComponent,
    StatusContentComponent,
    MovementContentComponent,
    MovementTableComponent,
    ExtractButtonComponent
  ],
  exports: [
    ContainerDetailsComponent,
    StatusDetailsComponent,
    StatusContentComponent,
    MovementContentComponent,
    MovementTableComponent,
    ExtractButtonComponent
  ]
})
export class DetailsProductsModule { }

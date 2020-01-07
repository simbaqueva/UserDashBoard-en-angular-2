import { Component, OnInit } from '@angular/core';
import { DetailsService } from './services/details.service';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../banlinea-products/products-app/services/product-service/product-service.service'

@Component({
  moduleId: module.id,
  selector: 'app-container-details',
  templateUrl: './container-details.component.html',
  styleUrls: ['./container-details.component.css']
})
export class ContainerDetailsComponent implements OnInit {

  public accounts:any[];

  constructor(private detailsService: DetailsService, private route: ActivatedRoute, private productService: ProductService) { }

  ngOnInit() {
    this.accounts = [this.productService.getEvent(+this.route.snapshot.params['id']), this.detailsService.getEvent(+this.route.snapshot.params['id'])];
  }
}

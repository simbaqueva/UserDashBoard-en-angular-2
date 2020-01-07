import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product-service/product-service.service';
import { Subject } from 'rxjs/Subject';
import { Router } from '@angular/router';


@Component({
    moduleId: module.id,
    selector: 'table-headers',
    templateUrl: './table-headers.component.html',
    styleUrls: ['./table-headers.component.css']

})
export class TableHeadersComponent implements OnInit {
    public filterBy:any;
    public products:any;
    public data:any[];
    public data_lenght:number;

    constructor(private route: ActivatedRoute, private productService: ProductService, private routes: Router) {

    }

    ngOnInit() {
        this.filterBy = this.routes.url.split('/')[2]
        this.data_lenght = this.productService.getLenght();
        this.products = this.productService.getProducts();
        this.data = this.productService.data;
    }

    filterByStatus(status:string) {
        this.products=this.productService.getStatus(status);
    }
}

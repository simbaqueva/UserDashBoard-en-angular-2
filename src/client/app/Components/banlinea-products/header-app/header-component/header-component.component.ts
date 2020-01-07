import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../products-app/services/product-service/product-service.service'
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router'

@Component({
  moduleId: module.id,
  selector: 'header-component',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {

  }

}

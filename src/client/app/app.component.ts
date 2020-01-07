import { Component, OnInit  } from '@angular/core';
import { Config } from './shared/config/env.config';
import { Router } from '@angular/router'
import 'rxjs/add/operator/pairwise';
import './operators';

/**
 * This class represents the main application component.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
})
export class AppComponent implements OnInit{

  public filterBy:any;
  
  constructor(private router: Router) {
    console.log('Environment config', Config);
  }

  ngOnInit(){
  }

  getUrl(){
    if(this.router.url.split('/')[2] == "todos"){
      return false;
    }
    else if(this.router.url.split('/')[2] == "detalles"){
      return true;
    }
    else{
      return null;
    }
  }
}

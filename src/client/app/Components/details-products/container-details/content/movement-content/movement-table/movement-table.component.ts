import { Component, OnInit, Input } from '@angular/core';
import { PagerService } from '../../../../../../_services/pager.service'

@Component({
    moduleId: module.id,
    selector: 'movement-table',
    templateUrl: './movement-table.component.html',
    styleUrls: ['./movement-table.component.css'],
    providers: [ PagerService ]
})
export class MovementTableComponent implements OnInit {

  @Input() accounts:any;

  private movements:any = [];
  private value:any;
  private actual_page:number;

  constructor(private data: PagerService){

  }
  ngOnInit(){
      this.actual_page = 0;
      this.movements= this.data.getArrayNumbers(this.accounts[1].movements, 12);
  }

  getColorClass(value:any):any{
      if(value<0){
          this.value = "-$"+(-value).toLocaleString()
          return [ 'red' ]
      }
      else{
          this.value = "$"+value.toLocaleString();
      }
  }

  arrowPagination(value:number){
      if(value==0){
          if(this.actual_page >= 1){
            this.actual_page--;
          }
      }
      else{
          if(this.actual_page < this.movements.length-1){
            this.actual_page++;
          }
      }

  }
}

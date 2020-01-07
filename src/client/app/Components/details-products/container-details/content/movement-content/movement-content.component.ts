import { Component, OnInit, Input } from '@angular/core';
import { IMyDpOptions } from 'mydatepicker';

@Component({
  moduleId: module.id,
  selector: 'movement-content',
  templateUrl: './movement-content.component.html',
  styleUrls: ['./movement-content.component.css']
})
export class MovementContentComponent implements OnInit {
  @Input() accounts:any;

  private myDatePicker: IMyDpOptions ={
    dateFormat: 'dd.mm.yyyy'
  }

  constructor() { }

  ngOnInit() {
  }

}

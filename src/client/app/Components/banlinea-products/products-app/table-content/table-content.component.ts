import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  moduleId: module.id,
  selector: 'table-content',
  templateUrl: './table-content.component.html',
  styleUrls: ['./table-content.component.css']
})
export class TableContentComponent implements OnInit {
  @Input() event:any

  constructor() { }

  ngOnInit() {
  }

}

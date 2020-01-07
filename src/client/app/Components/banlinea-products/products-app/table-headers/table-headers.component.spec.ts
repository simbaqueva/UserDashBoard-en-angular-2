import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableHeadersComponent } from './table-headers.component';

describe('TableHeadersComponent', () => {
  let component: TableHeadersComponent;
  let fixture: ComponentFixture<TableHeadersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableHeadersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableHeadersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

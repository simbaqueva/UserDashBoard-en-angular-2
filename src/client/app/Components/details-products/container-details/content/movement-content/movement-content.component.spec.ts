import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovementContentComponent } from './movement-content.component';

describe('MovementContentComponent', () => {
  let component: MovementContentComponent;
  let fixture: ComponentFixture<MovementContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovementContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovementContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DpSelectFieldComponent } from './dp-select-field.component';

describe('DpSelectFieldComponent', () => {
  let component: DpSelectFieldComponent;
  let fixture: ComponentFixture<DpSelectFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DpSelectFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DpSelectFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DpDateTimeFieldComponent } from './dp-date-time-field.component';

describe('DpDateTimeFieldComponent', () => {
  let component: DpDateTimeFieldComponent;
  let fixture: ComponentFixture<DpDateTimeFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DpDateTimeFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DpDateTimeFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

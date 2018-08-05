import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DpInputFieldComponent } from './dp-input-field.component';

describe('DpInputFieldComponent', () => {
  let component: DpInputFieldComponent;
  let fixture: ComponentFixture<DpInputFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DpInputFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DpInputFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DpTextareaFieldComponent } from './dp-textarea-field.component';

describe('DpTextareaFieldComponent', () => {
  let component: DpTextareaFieldComponent;
  let fixture: ComponentFixture<DpTextareaFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DpTextareaFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DpTextareaFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

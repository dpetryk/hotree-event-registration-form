import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';

import {EventCreationFormComponent} from './event-creation-form.component';
import {SharedModule} from '../../../shared/shared.module';
import moment from 'moment-es6';


describe('EventCreationFormComponent', () => {
  let component: EventCreationFormComponent;
  let fixture: ComponentFixture<EventCreationFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        SharedModule,
        RouterTestingModule
      ],
      declarations: [EventCreationFormComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventCreationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create About form group', () => {
    expect(component.whenFg).toBeTruthy();
  });

  it('should create Coordinator form group', () => {
    expect(component.coordinatorFg).toBeTruthy();
  });

  it('should create When form group', () => {
    expect(component.whenFg).toBeTruthy();
  });

  it('should not pass without valid input', () => {
    expect(component.aboutFg.valid && component.coordinatorFg.valid && component.whenFg.valid).toBeFalsy();
  });

  it('should have proper validation on title field', () => {
    const field = component.title;
    field.patchValue('');
    expect(field.valid).toBeFalsy();
    field.patchValue('something');
    expect(field.valid).toBeTruthy();
  });

  it('should have proper validation on description field', () => {
    const field = component.description;
    field.patchValue('');
    expect(field.valid).toBeFalsy();
    field.patchValue('something');
    expect(field.valid).toBeTruthy();
  });

  it('should have proper validation on event_fee field', () => {
    const field = component.event_fee;
    component.eventIsPaid();
    field.patchValue('');
    expect(field.valid).toBeFalsy();
    field.patchValue('text');
    expect(field.valid).toBeFalsy();
    field.patchValue(0);
    expect(field.valid).toBeFalsy();
    field.patchValue(1);
    expect(field.valid).toBeTruthy();
    component.eventIsFree();
    field.patchValue('');
    expect(field.valid).toBeTruthy();
  });

  it('should have proper validation on reward field', () => {
    const field = component.reward;
    field.patchValue('');
    expect(field.valid).toBeTruthy();
    field.patchValue('something');
    expect(field.valid).toBeFalsy();
    field.patchValue(5);
    expect(field.valid).toBeTruthy();
  });

  it('should have proper validation on email field', () => {
    const field = component.email;
    field.patchValue('s');
    expect(field.valid).toBeFalsy();
    field.patchValue('something@');
    expect(field.valid).toBeFalsy();
    field.patchValue('something@something');
    expect(field.valid).toBeTruthy();
    field.patchValue('something@something.');
    expect(field.valid).toBeFalsy();
    field.patchValue('something@something.something');
    expect(field.valid).toBeTruthy();
  });

  it('should have proper validation on date field', () => {
    const field = component.date;
    field.patchValue(moment().add(1, 'day').format('YYYY-MM-DD'));
    expect(field.valid).toBeTruthy();
    field.patchValue(moment().format('YYYY-MM-DD'));
    expect(field.valid).toBeFalsy();
    field.patchValue('');
    expect(field.valid).toBeFalsy();
  });

  it('should have proper validation on time field', () => {
    const field = component.time;
    field.patchValue('10:00');
    expect(field.valid).toBeTruthy();
    field.patchValue('15:00');
    expect(field.valid).toBeFalsy();
    field.patchValue('00:00');
    expect(field.valid).toBeFalsy();
  });

});

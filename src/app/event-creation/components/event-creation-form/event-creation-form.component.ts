import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

import {EventsService} from '../../../core/services/events.service';
import {EmployeesService} from '../../../core/services/employees.service';
import moment from 'moment-es6';

@Component({
  selector: 'app-event-creation-form',
  templateUrl: './event-creation-form.component.html',
  styleUrls: ['./event-creation-form.component.scss']
})
export class EventCreationFormComponent implements OnInit {

  aboutFg: FormGroup;
  coordinatorFg: FormGroup;
  whenFg: FormGroup;
  formSubmitted = false;
  paidEvent = false;

  constructor(
    private formBuilder: FormBuilder,
    public eventsService: EventsService,
    public employeesService: EmployeesService,
    private router: Router) {
  }

  ngOnInit() {
    this.aboutFg = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', [Validators.required, Validators.maxLength]],
      category_id: [''],
      paid_event: [''],
      event_fee: ['', [Validators.pattern('^[-.0-9]+$'), Validators.min(0.01)]],
      reward: ['', Validators.pattern('^[-.0-9]+$')],
    });
    this.coordinatorFg = this.formBuilder.group({
      coordinator: ['', Validators.required],
      email: ['', Validators.pattern(
        '^[a-zA-Z0-9.!#$%&\'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}' +
        '[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$')],
    });
    this.whenFg = this.formBuilder.group({
      date: ['', [this.checkIfFutureDate, Validators.required, ]],
      time: ['', [Validators.required,
        Validators.pattern('^((0[1-9])|(1[0-2])):([0-5][0-9])$')]], // Meridian time value pattern
      duration: ['', Validators.pattern('^[-.0-9]+$')],
      meridian: [''],
    });
  }

  eventIsPaid() {
    this.paidEvent = true;
    this.event_fee.markAsPristine();
    this.event_fee.setValidators([
      Validators.required,
      Validators.pattern('^[-.0-9]+$'),
      Validators.min(0.01)]);
  this.event_fee.updateValueAndValidity();
  }

  eventIsFree() {
    this.paidEvent = false;
    this.event_fee.clearValidators();
    this.event_fee.updateValueAndValidity();
  }

  isControlInvalid(controlName): boolean {
    const control: AbstractControl = controlName;
    return control.invalid && (control.touched || this.formSubmitted);
  }

  getErrorMessageOfControl(control): string {
    // const control: AbstractControl = control;
    if (this.isControlInvalid(control)) {
      const errors = control.errors;
      if (errors.required) {
        return 'Field cannot be empty';
      }
      if (errors.pattern) {
        return 'Not correct input format';
      }
      if (errors.maxlength) {
        return 'Text too long';
      }
      if (errors.min) {
        return 'Must be more than zero';
      }
      if (errors.pastDate) {
        return 'Must be future date';
      }
    }
    return '';
  }

  // custom validator comparing date to today
  checkIfFutureDate(c: AbstractControl): { [key: string]: boolean } | null {
    if (moment(c.value) < moment()) {
      return {'pastDate': true};
    }
    return null;
  }

  save() {
    this.formSubmitted = true;
    if ((this.aboutFg.valid) && (this.coordinatorFg.valid) && (this.whenFg.valid)) {
      console.log(this.formatFormInput());
      this.router.navigate(['/event-creation-form/success']);
    } else {
      console.log('Form not valid');
    }
  }

  formatFormInput() {
    return {
      title: this.title.value,
      description: this.description.value,
      category_id: this.category_id.value,
      paid_event: (this.paid_event.value === 'true'),
      event_fee: (this.paidEvent) ? parseFloat(parseFloat(this.event_fee.value).toFixed(2)) : 0,
      reward: parseFloat(parseFloat(this.reward.value).toFixed(2)),
      date: this.formatDateAndTime(),
      duration: parseFloat(parseFloat(this.duration.value).toFixed(2)) * 3600,
      coordinator: {
        email: this.email.value,
        id: this.coordinator.value,
      }
    };
  }

  formatDateAndTime(): string {
    const date = this.date.value;
    let time = this.time.value;
    let hours = parseInt((this.time.value).toString().substr(0, 2), 10);
    const minutes = this.time.value.toString().substr(3, 2);
    if ((this.meridian.value === 'pm') && (hours !== 12)) {
      hours += 12;
    }
    if ((this.meridian.value === 'am') && (hours === 12)) {
      hours -= 12;
    }
    time = (hours < 10) ? ('0' + hours.toString() + ':' + minutes) : hours.toString() + ':' + minutes;
    return date + 'T' + time;
  }

  // ----------------------Form-control-getters--------------------

  get title() {
    return this.aboutFg.get('title');
  }

  get description() {
    return this.aboutFg.get('description');
  }

  get category_id() {
    return this.aboutFg.get('category_id');
  }

  get paid_event() {
    return this.aboutFg.get('paid_event');
  }

  get event_fee() {
    return this.aboutFg.get('event_fee');
  }

  get reward() {
    return this.aboutFg.get('reward');
  }

  get date() {
    return this.whenFg.get('date');
  }

  get time() {
    return this.whenFg.get('time');
  }

  get meridian() {
    return this.whenFg.get('meridian');
  }

  get duration() {
    return this.whenFg.get('duration');
  }

  get coordinator() {
    return this.coordinatorFg.get('coordinator');
  }

  get email() {
    return this.coordinatorFg.get('email');
  }

  get id() {
    return this.coordinatorFg.get('id');
  }

}

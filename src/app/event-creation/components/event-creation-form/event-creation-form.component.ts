import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {EventsService} from '../../../core/services/events.service';
import {EmployeesService} from '../../../core/services/employees.service';
import moment from 'moment-es6';

@Component({
  selector: 'app-event-creation-form',
  templateUrl: './event-creation-form.component.html',
  styleUrls: ['./event-creation-form.component.scss']
})
export class EventCreationFormComponent implements OnInit {

  fg: FormGroup;
  private formSubmitted = false;

  constructor(
    private formBuilder: FormBuilder,
    public eventsService: EventsService,
    public employeesService: EmployeesService) {
  }

  get title() {
    return this.fg.get('title');
  }

  ngOnInit() {
    this.fg = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', [Validators.required, Validators.maxLength]],
      category_id: [''],
      paid_event: [''],
      event_fee: ['', Validators.pattern('^[-.0-9]+$')],
      reward: ['', Validators.pattern('^[-.0-9]+$')],
      coordinator: ['', Validators.required],
      email: ['', Validators.pattern(
        '^[a-zA-Z0-9.!#$%&\'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}' +
        '[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$')],
      date: ['', Validators.required],
      time: ['', [Validators.required,
        Validators.pattern('^((0[0-9])|(1[0-2])):([0-5][0-9])$')]], // Meridian time value pattern
      duration: ['', Validators.pattern('^[-.0-9]+$')],
      meridian: [''],
    });
  }

  isControlInvalid(controlName): boolean {
    const control: AbstractControl = this.fg.get(controlName);
    return control.invalid && (control.touched || this.formSubmitted);
  }

  getErrorMessageOfControl(controlName): string {
    const control: AbstractControl = this.fg.get(controlName);
    if (this.isControlInvalid(controlName)) {
      const errors = control.errors;
      if (errors.required) {
        return 'This field cannot be empty';
      }
      if (errors.pattern) {
        return 'Not correct value format';
      }
      if (errors.maxlength) {
        return 'Text too long';
      }
    }

    return '';
  }

  save() {
    this.formSubmitted = true;
    // if (this.fg.valid) {
      console.log(this.formatFormInput());
    // } else {
    //   console.log('Form not valid');
    // }
  }

  formatFormInput() {
     const formattedInput = {
      title: this.fg.get('title').value,
      description: this.fg.get('description').value,
      category_id: this.fg.get('category_id').value,
      paid_event: (this.fg.get('paid_event').value === 'true'),
      event_fee: parseFloat(parseFloat(this.fg.get('event_fee').value).toFixed(2)),
      reward: parseFloat(parseFloat(this.fg.get('reward').value).toFixed(2)),
      date: this.formatDateAndTime(),
      duration: parseFloat(parseFloat(this.fg.get('duration').value).toFixed(2)) * 3600,
      coordinator: {
        email: this.fg.get('email').value,
        id: this.fg.get('coordinator').value,
      }
    };
    return formattedInput;
  }

  formatDateAndTime(): string {
    const date = this.fg.get('date').value;
    let time = this.fg.get('time').value;
    let hours = parseInt((this.fg.get('time').value).toString().substr(0, 2), 10);
    const minutes = this.fg.get('time').value.toString().substr(3, 2);
    if ((this.fg.get('meridian').value === 'pm') && (hours !== 12)) {
      hours += 12;
    }
    if ((this.fg.get('meridian').value === 'am') && (hours === 12)) {
      hours -= 12;
    }
    time = (hours < 10) ? ('0' + hours.toString() + ':' + minutes) : hours.toString() + ':' + minutes;
    return date + 'T' + time;
  }

}

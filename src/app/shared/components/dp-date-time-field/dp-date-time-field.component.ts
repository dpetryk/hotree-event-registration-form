import {AfterViewInit, Component, forwardRef, Input, OnInit} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'app-dp-date-time-field',
  templateUrl: './dp-date-time-field.component.html',
  styleUrls: ['./dp-date-time-field.component.scss', './dp-date-time-field-mobile.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => DpDateTimeFieldComponent),
    multi: true
  }]
})
export class DpDateTimeFieldComponent implements AfterViewInit, ControlValueAccessor {


  @Input()
  id = '';

  @Input()
  value = '';

  @Input()
  type = '';

  @Input()
  errorMessage = '';

  @Input()
  placeholder = '';

  @Input()
  hint = '';

  @Input()
  label = '';

  constructor() {
  }

  writeValue(value: any) {
    if (value) {
      this.value = value;
    }
  }

  onChange(event) {
    const element = event.target || event.srcElement;
    this.propagateChange(element.value);
  }

  onBlur() {
    this.onTouchedCallback();
  }

  registerOnChange(fn) {
    this.propagateChange = fn;

    if (this.value) {
      this.propagateChange(this.value);
    }
  }

  registerOnTouched(fn) {
    this.onTouchedCallback = fn;
  }

  private onTouchedCallback = () => {
  };

  private propagateChange = (_: any) => {
  };

  ngAfterViewInit() {

    // define variables
    const nativePicker = <HTMLElement>document.querySelector('.nativeTimePicker');
    const fallbackPicker = <HTMLElement>document.querySelector('.fallbackTimePicker');
    const fallbackLabel = <HTMLElement>document.querySelector('.fallbackLabel');
    const hourSelect = <HTMLSelectElement>document.querySelector('#hour');
    const minuteSelect = <HTMLSelectElement>document.querySelector('#minute');


// hide fallback initially
    fallbackPicker.style.display = 'none';
    fallbackLabel.style.display = 'none';

// test whether a new date input falls back to a text input or not
    const test = document.createElement('input');
    test.type = 'time';
// if it does, run the code inside the if() {} block
    if (test.type === 'text') {
      // hide the native picker and show the fallback
      nativePicker.style.display = 'none';
      fallbackPicker.style.display = 'block';
      fallbackLabel.style.display = 'block';
    }
    // populate the hours and minutes dynamically
    populateHours();
    populateMinutes();


    function populateHours() {
      // populate the hours <select> with the 6 open hours of the day
      for (let i = 12; i <= 18; i++) {
        const option = document.createElement('option');
        option.textContent = i.toString();
        hourSelect.appendChild(option);
      }
    }

    function populateMinutes() {
      // populate the minutes <select> with the 60 hours of each minute
      for (let i = 0; i <= 59; i++) {
        const option = document.createElement('option');
        option.textContent = ((i < 10) ? ('0' + i) : i).toString();
        minuteSelect.appendChild(option);
      }
    }

// make it so that if the hour is 18, the minutes value is set to 00
// — you can't select times past 18:00
    function setMinutesToZero() {
      if (hourSelect.value === '18') {
        minuteSelect.value = '00';
      }
    }

    hourSelect.onchange = setMinutesToZero;
    minuteSelect.onchange = setMinutesToZero;

  }
}

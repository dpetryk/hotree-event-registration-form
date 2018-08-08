import {Component, forwardRef, Input, OnInit} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import {Employee} from '../../../core/models/employee';
import {EventCategory} from '../../../core/models/event-category';

@Component({
  selector: 'app-dp-select-field',
  templateUrl: './dp-select-field.component.html',
  styleUrls: ['./dp-select-field.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => DpSelectFieldComponent),
    multi: true
  }]
})
export class DpSelectFieldComponent implements OnInit, ControlValueAccessor {

  @Input()
  options;
  processedOptions = [];

  @Input()
  fieldId = '';

  @Input()
  value = '';

  @Input()
  errorMessage = '';

  @Input()
  hint = '';

  @Input()
  label = '';

  @Input()
  required: boolean;

  @Input()
  placeholder = '';

  @Input()
  preselection: Employee;

  constructor() {
  }

  ngOnInit() {
    if (this.preselection) {
      this.removePreselectionFromOptions();
    }
  }

  removePreselectionFromOptions() {
    if (this.preselection) {
      for (let i = 0; i < this.options.length; i++) {
        if (this.options[i].id !== this.preselection.id) {
          this.processedOptions.push(this.options[i]);
        }
      }
    } else {
      this.processedOptions = this.options;
    }
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
}


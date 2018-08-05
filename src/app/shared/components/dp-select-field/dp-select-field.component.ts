import {Component, forwardRef, Input, OnInit} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
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
export class DpSelectFieldComponent implements ControlValueAccessor {

  @Input()
  options: EventCategory[];

  @Input()
  id = '';

  @Input()
  value = '';

  @Input()
  errorMessage = '';

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
}


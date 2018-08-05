import {Component, forwardRef, Input} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'app-dp-textarea-field',
  templateUrl: './dp-textarea-field.component.html',
  styleUrls: ['./dp-textarea-field.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => DpTextareaFieldComponent),
    multi: true
  }]
})
export class DpTextareaFieldComponent implements ControlValueAccessor {

  @Input()
  id = '';

  @Input()
  value = '';

  @Input()
  rows = '';

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
}
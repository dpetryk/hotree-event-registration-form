import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-event-creation-form',
  templateUrl: './event-creation-form.component.html',
  styleUrls: ['./event-creation-form.component.scss']
})
export class EventCreationFormComponent implements OnInit {

  aboutFg: FormGroup;
  private formSubmitted = false;

  constructor(private formBuilder: FormBuilder) {
  }

  get title() {
    return this.aboutFg.get('title');
  }

  ngOnInit() {
    this.aboutFg = this.formBuilder.group({
      titleNative: ['', [Validators.required]],
      titleCustom: ['', [Validators.required, Validators.pattern('[0-9]{3,}')]]
    });
  }

  isControlInvalid(controlName): boolean {
    const control: AbstractControl = this.aboutFg.get(controlName);
    return control.invalid && (control.touched || this.formSubmitted);
  }

  getErrorMessageOfControl(controlName): string {
    const control: AbstractControl = this.aboutFg.get(controlName);

    if (this.isControlInvalid(controlName)) {
      const errors = control.errors;

      if (errors.required) {
        return 'This field cannot be empty';
      }

      if (errors.pattern) {
        return 'Not correct value';
      }
    }

    return '';
  }

  save() {
    this.formSubmitted = true;
    if (this.aboutFg.valid) {
      console.log(this.aboutFg.value);
    } else {
      console.log('form not valid');
    }
  }
}

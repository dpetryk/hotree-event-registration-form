import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { DpInputFieldComponent } from './components/dp-input-field/dp-input-field.component';
import { HeaderComponent } from './components/header/header.component';
import { CardComponent } from './components/card/card.component';
import { DpTextareaFieldComponent } from './components/dp-textarea-field/dp-textarea-field.component';
import { DpSelectFieldComponent } from './components/dp-select-field/dp-select-field.component';
import { DpDateTimeFieldComponent } from './components/dp-date-time-field/dp-date-time-field.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DpInputFieldComponent, HeaderComponent, CardComponent, DpTextareaFieldComponent, DpSelectFieldComponent, DpDateTimeFieldComponent],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    DpInputFieldComponent,
    DpSelectFieldComponent,
    DpTextareaFieldComponent,
    DpDateTimeFieldComponent,
    HeaderComponent,
    CardComponent
  ]
})
export class SharedModule { }

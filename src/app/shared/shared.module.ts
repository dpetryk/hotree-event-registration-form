import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CustomInputFieldComponent } from './components/custom-input-field/custom-input-field.component';
import { HeaderComponent } from './components/header/header.component';
import { CardComponent } from './components/card/card.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CustomInputFieldComponent, HeaderComponent, CardComponent],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    CustomInputFieldComponent,
    HeaderComponent,
    CardComponent
  ]
})
export class SharedModule { }

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EventCreationFormComponent} from './components/event-creation-form/event-creation-form.component';
import {SharedModule} from '../shared/shared.module';
import { FormSuccessComponent } from './components/event-creation-form/form-success/form-success.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    EventCreationFormComponent,
    FormSuccessComponent
  ]
})
export class EventCreationModule {
}

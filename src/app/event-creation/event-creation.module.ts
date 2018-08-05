import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventCreationFormComponent } from './components/event-creation-form/event-creation-form.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [EventCreationFormComponent]
})
export class EventCreationModule { }

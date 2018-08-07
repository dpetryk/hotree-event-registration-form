import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {DpInputFieldComponent} from './shared/components/dp-input-field/dp-input-field.component';
import {EventCreationFormComponent} from './event-creation/components/event-creation-form/event-creation-form.component';
import {FormSuccessComponent} from './event-creation/components/event-creation-form/form-success/form-success.component';

const routes: Routes = [
  {path: '', redirectTo: '/event-creation-form', pathMatch: 'full'},
  {path: 'event-creation-form', component: EventCreationFormComponent},
  {path: 'event-creation-form/success', component: FormSuccessComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}

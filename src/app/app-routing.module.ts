import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {DpInputFieldComponent} from './shared/components/dp-input-field/dp-input-field.component';
import {EventCreationFormComponent} from './event-creation/components/event-creation-form/event-creation-form.component';

const routes: Routes = [
  {path: '', redirectTo: '/form', pathMatch: 'full'},
  {path: 'form', component: EventCreationFormComponent},
  {path: 'input', component: DpInputFieldComponent},
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

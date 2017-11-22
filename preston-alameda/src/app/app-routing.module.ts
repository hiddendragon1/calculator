import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactEditorComponent } from './contact-editor/contact-editor.component'
import { ContactListComponent } from './contact-list/contact-list.component'

const routes: Routes = [
  { path: '', redirectTo: '/list', pathMatch: 'full' },
  { path: 'list',component: ContactListComponent   },
  { path: 'contact/:id', component: ContactEditorComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {



}
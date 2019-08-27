import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FormTicketPersonalPage } from './form-ticket-personal.page';

const routes: Routes = [
  {
    path: '',
    component: FormTicketPersonalPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FormTicketPersonalPage]
})
export class FormTicketPersonalPageModule {}

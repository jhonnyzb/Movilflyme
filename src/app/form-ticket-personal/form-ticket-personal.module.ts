import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FormTicketPersonalPage } from './form-ticket-personal.page';
import { PopCiudadesComponent } from '../componentes/pop-ciudades/pop-ciudades.component';
import { ComponentesModule } from '../componentes/componentes.module';
import { PopAddPasejerosPersonalComponent } from '../componentes/pop-add-pasejeros-personal/pop-add-pasejeros-personal.component';

const routes: Routes = [
  {
    path: '',
    component: FormTicketPersonalPage
  }
];

@NgModule({
  entryComponents:[
    PopCiudadesComponent,
    PopAddPasejerosPersonalComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ComponentesModule
  ],
  declarations: [FormTicketPersonalPage]
})
export class FormTicketPersonalPageModule {}

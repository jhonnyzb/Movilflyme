import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';
import { PopitemsComponent } from './popitems/popitems.component';
import { PopDetailPasajesPersonalComponent } from './pop-detail-pasajes-personal/pop-detail-pasajes-personal.component';



@NgModule({
  declarations: [PopitemsComponent, PopDetailPasajesPersonalComponent ],
  exports:[
    PopitemsComponent,PopDetailPasajesPersonalComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ComponentesModule { }

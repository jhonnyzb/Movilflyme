import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';
import { PopitemsComponent } from './popitems/popitems.component';



@NgModule({
  declarations: [PopitemsComponent],
  exports:[
    PopitemsComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ComponentesModule { }

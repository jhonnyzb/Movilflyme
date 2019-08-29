import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { PopitemsComponent } from './popitems/popitems.component';
import { PopDetailPasajesPersonalComponent } from './pop-detail-pasajes-personal/pop-detail-pasajes-personal.component';
import { NgxPaginationModule} from 'ngx-pagination'
import { PopCiudadesComponent } from './pop-ciudades/pop-ciudades.component';
import { PipesModule } from '../pipes/pipes.module';
import { PopAddPasejerosPersonalComponent } from './pop-add-pasejeros-personal/pop-add-pasejeros-personal.component';
import { TucuentaComponent } from './tucuenta/tucuenta.component';



@NgModule({
  declarations: [PopitemsComponent, PopDetailPasajesPersonalComponent, PopCiudadesComponent, PopAddPasejerosPersonalComponent, TucuentaComponent ],
  exports:[
    PopitemsComponent,PopDetailPasajesPersonalComponent, PopCiudadesComponent, PopAddPasejerosPersonalComponent, TucuentaComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    NgxPaginationModule,
    PipesModule,
    FormsModule
  ]
})
export class ComponentesModule { }

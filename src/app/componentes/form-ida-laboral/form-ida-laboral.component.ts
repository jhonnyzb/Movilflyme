import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopCiudadesComponent } from '../pop-ciudades/pop-ciudades.component';

@Component({
  selector: 'app-form-ida-laboral',
  templateUrl: './form-ida-laboral.component.html',
  styleUrls: ['./form-ida-laboral.component.scss'],
})
export class FormIdaLaboralComponent implements OnInit {

  textBotonCiudadO = 'Click para elegir';
  textBotonCiudadR = 'Click para elegir';
  ciudadOrigen: string = '';
  ciudadDestino: string = '';

  constructor(public popoverController: PopoverController) { }

  ngOnInit() {}


  //Ciudad Origen
  async presentPopoverOrigen() {

    const popover = await this.popoverController.create({
      component: PopCiudadesComponent,
      //componentProps: { idopcion: idvalue },
      //cssClass: 'popover_class',
      backdropDismiss: false,
      translucent: true
    });
    await popover.present();
    //const { data } = await popover.onDidDismiss();
    const { data } = await popover.onWillDismiss();
    this.ciudadOrigen = data.ciudad;
    this.textBotonCiudadO = data.ciudad;
  }

  //Ciudad Destino
  async presentPopoverDestino() {

    const popover = await this.popoverController.create({
      component: PopCiudadesComponent,
      //componentProps: { idopcion: idvalue },
      //cssClass: 'popover_class',
      backdropDismiss: false,
      translucent: true
    });
    await popover.present();
    //const { data } = await popover.onDidDismiss();
    const { data } = await popover.onWillDismiss();
    this.ciudadDestino = data.ciudad;
    this.textBotonCiudadR = data.ciudad;
  }

}

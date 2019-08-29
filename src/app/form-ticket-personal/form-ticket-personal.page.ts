import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopCiudadesComponent } from '../componentes/pop-ciudades/pop-ciudades.component';
import { PopAddPasejerosPersonalComponent } from '../componentes/pop-add-pasejeros-personal/pop-add-pasejeros-personal.component';

@Component({
  selector: 'app-form-ticket-personal',
  templateUrl: './form-ticket-personal.page.html',
  styleUrls: ['./form-ticket-personal.page.scss'],
})
export class FormTicketPersonalPage implements OnInit {

  fecha_actual: Date = new Date();
  optionspickers;
  optionspickersH;
  optionspickersFr;
  optionspickersHr;
  fecha: Date = new Date();
  ciudadOrigen: string = '';
  ciudadDestino: string = '';
  tipoVuelo: string = '';
  trayecto: string = '';
  textBotonCiudadO = 'Click para elegir';
  textBotonCiudadR = 'Click para elegir';
  banderaTrayecto: boolean = true;
  dataPassenger: any;
 

  constructor(public popoverController: PopoverController) { }

  ngOnInit() {
    //fecha ida
    this.optionspickers = {
      buttons: [{
        text: 'Guardar',
        handler: (event) => {
          console.log(event)
        }
      }, {
        text: 'Cancelar',
        handler: () => {
          console.log('');
        }
      }]
    }

    //hora ida
    this.optionspickersH = {
      buttons: [{
        text: 'Guardar',
        handler: (event) => {
          console.log(event)
        }
      }, {
        text: 'Cancelar',
        handler: () => {
          console.log('');
        }
      }]
    }


    //fecha regreso
    this.optionspickersFr = {
      buttons: [{
        text: 'Guardar',
        handler: (event) => {
          console.log(event)
        }
      }, {
        text: 'Cancelar',
        handler: () => {
          console.log('');
        }
      }]
    }

    //hora regreso
    this.optionspickersHr = {
      buttons: [{
        text: 'Guardar',
        handler: (event) => {
          console.log(event)
        }
      }, {
        text: 'Cancelar',
        handler: () => {
          console.log('');
        }
      }]
    }
  }


  cambioTipo(event) {
    this.tipoVuelo = event.detail.value;

  }

  cambioTrayecto(event) {
    if (event.detail.value === 'soloida') {
      this.banderaTrayecto = false;
      this.trayecto = event.detail.value
    }
    if (event.detail.value === 'idayvuelta') {
      this.banderaTrayecto = true;
      this.trayecto = event.detail.value
    }

  }

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


  async presentPopoverAddpasajero() {

    const popover = await this.popoverController.create({
      component: PopAddPasejerosPersonalComponent,
      //componentProps: { idopcion: idvalue },
      cssClass: 'popover_classaddPasajeros',
      //backdropDismiss: false,
      translucent: true
    });
    await popover.present();
    //const { data } = await popover.onDidDismiss();
    const { data } = await popover.onWillDismiss();
    this.dataPassenger = data;
    console.log(this.dataPassenger.pasajero.nombres)
  }

 
}

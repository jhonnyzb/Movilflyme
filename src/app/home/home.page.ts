import { Component, OnInit } from '@angular/core';
import { ServicesAllService } from '../servicios/services-all.service';
import { PopoverController } from '@ionic/angular';
import { PopDetailPasajesPersonalComponent } from '../componentes/pop-detail-pasajes-personal/pop-detail-pasajes-personal.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  opciones: any;
  opciones_: any;

  constructor(private servicio: ServicesAllService, public popoverController: PopoverController) { }

  ngOnInit() {
    this.getOpcion();
  }


  getOpcion() {
    this.opciones = this.servicio.opcionHomeTicket();

  }

  cambio(event: any) {

    if (event.detail.value === 'anticipo') {
      var index = this.opciones.findIndex(obj => obj.value === 'anticipo');
      this.opciones_ = this.opciones[index].opcionesInternas;
      console.log(this.opciones_)
    }
    if (event.detail.value === 'pasajeAereo') {
      var index = this.opciones.findIndex(obj => obj.value === 'pasajeAereo');
      this.opciones_ = this.opciones[index].opcionesInternas;
      console.log(this.opciones_)
    }
    if (event.detail.value === 'reembolso') {
      var index = this.opciones.findIndex(obj => obj.value === 'reembolso');
      this.opciones_ = this.opciones[index].opcionesInternas;
      console.log(this.opciones_)
    }
    if (event.detail.value === 'aereoPersonal') {
      var index = this.opciones.findIndex(obj => obj.value === 'aereoPersonal');
      this.opciones_ = this.opciones[index].opcionesInternas;
      console.log(this.opciones_)
    }

  }


  cambioEstados(event) {

    this.presentPopover(event.detail.value);

  }

  async presentPopover(idvalue) {
    const popover = await this.popoverController.create({
      component: PopDetailPasajesPersonalComponent,
      componentProps: { idopcion: idvalue },
      cssClass: 'popover_class',
      //backdropDismiss: false,
      translucent: true
    });
    await popover.present();
    //const { data } = await popover.onDidDismiss();
    const { data } = await popover.onWillDismiss();


  }


}

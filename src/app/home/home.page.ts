import { Component, OnInit, OnDestroy } from '@angular/core';
import { ServicesAllService } from '../servicios/services-all.service';
import { PopoverController } from '@ionic/angular';
import { PopDetailPasajesPersonalComponent } from '../componentes/pop-detail-pasajes-personal/pop-detail-pasajes-personal.component';
import { TucuentaComponent } from '../componentes/tucuenta/tucuenta.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit, OnDestroy {

  opciones: any;
  opciones_: any[];
  estado: any;
  controlPopover: number = 1;
  datosPasajes: FormGroup;

  constructor(private servicio: ServicesAllService, public popoverController: PopoverController,private Formbuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.getOpcion();
    this.buildForm()
  }


  private buildForm() {

    this.datosPasajes = this.Formbuilder.group(
      {
        tipoRegistro: [],
        estado: []
       
      }
    )
  }

  getOpcion() {
    this.opciones = this.servicio.opcionHomeTicket();

  }

  cambio(event: any) {

    if (event.detail.value === 'anticipo') {
      this.estado = event.detail.value;
      var index = this.opciones.findIndex(obj => obj.value === 'anticipo');
      this.opciones_ = this.opciones[index].opcionesInternas;
     
    }
    if (event.detail.value === 'pasaje_aereo') {
      this.estado = event.detail.value;
      var index = this.opciones.findIndex(obj => obj.value === 'pasaje_aereo');
      this.opciones_ = this.opciones[index].opcionesInternas;
     
    }
    if (event.detail.value === 'reembolso') {
      this.estado = event.detail.value;
      var index = this.opciones.findIndex(obj => obj.value === 'reembolso');
      this.opciones_ = this.opciones[index].opcionesInternas;
     
    }
    if (event.detail.value === 'pasaje_aereo_personal') {
      this.estado = event.detail.value;
      var index = this.opciones.findIndex(obj => obj.value === 'pasaje_aereo_personal');
      this.opciones_ = this.opciones[index].opcionesInternas;
      
    }

  }


  cambioEstados(event) {
    if (this.controlPopover >= 2){
      this.controlPopover = 1;
    }else{
      
      this.presentPopover(event.detail.value);
      
    }
     
  }

  async presentPopover(idvalue) {
    const popover = await this.popoverController.create({
      component: PopDetailPasajesPersonalComponent,
      componentProps: { tipoRegistro: idvalue, estado: this.estado },
      cssClass: 'popover_class',
      backdropDismiss: false,
      translucent: true
    });
    await popover.present();
     await popover.onDidDismiss().then(
       res =>{
         this.controlPopover = this.controlPopover + 1
         this.datosPasajes.reset();   
       }
     )
  

  }


  async presentPopoverTuCuenta(evento) {
    const popover = await this.popoverController.create({
      component: TucuentaComponent,
      event: evento,
      mode: 'ios',
      //componentProps: { idopcion: idvalue },
      //cssClass: 'popover_class',
      //backdropDismiss: false,
      translucent: true
    });
    await popover.present();
    //const { data } = await popover.onDidDismiss();
    const { data } = await popover.onWillDismiss();


  }


  ngOnDestroy() {

  }

}

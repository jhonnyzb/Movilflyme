import { Component, OnInit } from '@angular/core';
import { PopoverController, AlertController } from '@ionic/angular';
import { PopCiudadesComponent } from '../componentes/pop-ciudades/pop-ciudades.component';
import { PopAddPasejerosPersonalComponent } from '../componentes/pop-add-pasejeros-personal/pop-add-pasejeros-personal.component';
import { ServicesAllService } from '../servicios/services-all.service';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { TucuentaComponent } from '../componentes/tucuenta/tucuenta.component';


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
  //fecha: Date = new Date();
  ciudadOrigen: string = '';
  ciudadDestino: string = '';
  tipoVuelo: string = '';
  trayecto: string = '';
  textBotonCiudadO = 'Click para elegir';
  textBotonCiudadR = 'Click para elegir';
  banderaTrayecto: boolean = true;
  dataPassenger: any;
  mesparcial: string = '';
  diaparcial: string = '';
  horaparcial: string = '';
  fecha_ida: string ='';
  fecha_regreso: string = '';
  hora_ida: string = '';
  hora_regreso: string = '';
  banderapasaporte: boolean = false;
  sessionid: string = '';
 

  constructor(public popoverController: PopoverController, private servicio: ServicesAllService, public alert: AlertController,private router: Router, private storage: Storage) { }

  ngOnInit() {
    //fecha ida
    this.optionspickers = {
      buttons: [{
        text: 'Guardar',
        handler: (event) => {
          let mest = String(event.month.value);
          let diat = String(event.day.value);
          if (mest.length === 1) {
            this.mesparcial = '0' + mest;
          }else{
            this.mesparcial = event.month.value;
          }
          if (diat.length === 1) {
            this.diaparcial = '0' + diat;
          }else{
            this.diaparcial = event.day.value;
          }
          this.fecha_ida = event.year.value + '-' + this.mesparcial + '-' + this.diaparcial;
          console.log(this.fecha_ida)
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
          let hora = event.hour.text;
          if (hora.length === 1) {
            this.horaparcial = '0' + hora;
          }else{
            this.horaparcial = event.hour.text;
          }
          this.hora_ida = this.horaparcial + ':' + event.minute.text + ' ' + event.ampm.text;
          console.log(this.hora_ida)
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
          let mest = String(event.month.value);
          let diat = String(event.day.value);
          if (mest.length === 1) {
            this.mesparcial = '0' + mest;
          }else{
            this.mesparcial = event.month.value;
          }
          if (diat.length === 1) {
            this.diaparcial = '0' + diat;
          }else{
            this.diaparcial = event.day.value;
          }
          this.fecha_regreso = event.year.value + '-' + this.mesparcial + '-' + this.diaparcial;
          console.log(this.fecha_regreso)
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
          let hora = event.hour.text;
          if (hora.length === 1) {
            this.horaparcial = '0' + hora;
          }else{
            this.horaparcial = event.hour.text;
          }
          this.hora_regreso = this.horaparcial + ':' + event.minute.text + ' ' + event.ampm.text;
          console.log(this.hora_regreso)
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
    if (event.detail.value === 'internacional'){
        this.banderapasaporte = true;
    }else{
      this.banderapasaporte = false;
    }
    this.tipoVuelo = event.detail.value;

  }

  cambioTrayecto(event) {
    if (event.detail.value === 'solo_ida') {
      this.banderaTrayecto = false;
      this.trayecto = event.detail.value
    }
    if (event.detail.value === 'ida_vuelta') {
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
      componentProps: { RequiredPasaporte: this.banderapasaporte },
      cssClass: 'popover_classaddPasajeros',
      //backdropDismiss: false,
      translucent: true
    });
    await popover.present();
    //const { data } = await popover.onDidDismiss();
    const { data } = await popover.onWillDismiss();
    this.dataPassenger = data;
    //console.log(this.dataPassenger.pasajero.nombres)
  }



  sendSolicitud(){
    this.storage.get('sessionId').then(
      (res)=>{
        let solicitud = {
          sessionId: res,
          fechaSolicitud: '2019-09-03',
          tipoVuelo: this.tipoVuelo,
          trayectoVuelo: this.trayecto,
          fechaIda: this.fecha_ida,
          fechaVuelta:this.fecha_regreso,
          ciudad_origen:this.ciudadOrigen,
          ciudadDestino: this.ciudadDestino,
          horaSalida: this.hora_ida,
          tipoDocumento: this.dataPassenger.pasajero.tipoDocumento,
          horaRegreso: this.hora_regreso,
          documentoPasajero: String (this.dataPassenger.pasajero.documento),
          nombres:this.dataPassenger.pasajero.nombres,
          apellidos:this.dataPassenger.pasajero.apellidos,
          fechaNacimiento: this.dataPassenger.pasajero.fecha_nacimiento,
          pasaporte: this.dataPassenger.pasajero.pasaporte,
          fechaVencimientoPasaporte: this.dataPassenger.pasajero.fechavencimiento
        }
        console.log(solicitud);
        this.servicio.solicitudPasajepersonal(solicitud).subscribe(
          (res:any)=>{
            if (res.codigoRespuesta == 0) {
              let mensaje = 'enviada con exito'
              this.presentAlert(mensaje)
              this.router.navigate(['/layout'])
            } 
            if (res.codigoRespuesta == 1001) {
              let mensaje = 'error al crearla'
              this.presentAlert(mensaje)
              this.router.navigate(['/layout'])
            }         
          },
          (err)=>{
            this.presentAlertErr();
            console.log('error-2',err)
          }
        )
      }
    ).catch(
      error=> console.log('error idsession no existente')
    )  
    
  }


  async presentAlert(mensaje) {
    const alert = await this.alert.create({
      subHeader: 'Solicitud',
      message: mensaje,
      buttons: ['OK']
    });
    await alert.present();
  }
 

  async presentAlertErr() {
    const alert = await this.alert.create({
      header: 'Error',
      subHeader: 'En la transaccion',
      message: 'Por favor ingrese nuevamente los datos',
      buttons: ['OK']
    });
    await alert.present();
  }


  async presentPopoverTuCuenta(evento) {
    const popover = await this.popoverController.create({
      component: TucuentaComponent,
      event: evento,
      mode:'ios',
      //componentProps: { idopcion: idvalue },
      //cssClass: 'popover_class',
      //backdropDismiss: false,
      translucent: true
    });
    await popover.present();
    //const { data } = await popover.onDidDismiss();
    const { data } = await popover.onWillDismiss();
  }
}

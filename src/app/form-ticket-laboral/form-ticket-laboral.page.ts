import { Component, OnInit, OnDestroy } from '@angular/core';
import { PopoverController, AlertController } from '@ionic/angular';
import { TucuentaComponent } from '../componentes/tucuenta/tucuenta.component';
import { FormIdaVueltaLaboralComponent } from '../componentes/form-ida-vuelta-laboral/form-ida-vuelta-laboral.component';
import { FormIdaLaboralComponent } from '../componentes/form-ida-laboral/form-ida-laboral.component';
import { FormMultitrayectolaboralComponent } from '../componentes/form-multitrayectolaboral/form-multitrayectolaboral.component';
import { ServicesAllService } from '../servicios/services-all.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-form-ticket-laboral',
  templateUrl: './form-ticket-laboral.page.html',
  styleUrls: ['./form-ticket-laboral.page.scss'],
})
export class FormTicketLaboralPage implements OnInit, OnDestroy {
  suscriptionLaboral: Subscription;
  fecha_actual: Date = new Date();
  opcionesFechaDesembolso;
  opcionesFechaNacimiento;
  mesparcial: any;
  diaparcial:any;
  fechaDesembolso: any;
  fechaNacimiento: any;
  numeroViajeroFrecuente: any;
  fecha: Date = new Date();
  motivo: string ='';
  solicitarAnticipo: string = '';
  descripcion: string = '';
  valorAnticipo: number;
  valorAnticipoLetras: string = '';
  desembolso: string = '';
  trayecto: string = '';
  detalleTrayectoIdaVuelta: any;


  constructor(public popoverController: PopoverController, private servicio:ServicesAllService, public alert: AlertController, private router: Router) { }

  ngOnInit() {

//fecha desembolso
this.opcionesFechaDesembolso = {
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
      this.fechaDesembolso = event.year.value + '-' + this.mesparcial + '-' + this.diaparcial;
      
    }
  }, {
    text: 'Cancelar',
    handler: () => {
      console.log('');
    }
  }]
}


//fecha nacimiento
this.opcionesFechaNacimiento = {
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
      this.fechaNacimiento = event.year.value + '-' + this.mesparcial + '-' + this.diaparcial;
      console.log(this.fechaNacimiento)
    }
  }, {
    text: 'Cancelar',
    handler: () => {
      console.log('');
    }
  }]
}


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


  async PopFormIdaVuelta() {
    this.trayecto = 'ida_vuelta';
    const popover = await this.popoverController.create({
      component: FormIdaVueltaLaboralComponent,
      //componentProps: { idopcion: idvalue },
      cssClass: 'popover_class',
      //backdropDismiss: false,
      translucent: true
    });
    await popover.present();
    //const { data } = await popover.onDidDismiss();
    const { data } = await popover.onWillDismiss();
    this.detalleTrayectoIdaVuelta = data;
    
    
  }

  async PopFormIda() {
    this.trayecto = 'solo_ida';
    const popover = await this.popoverController.create({
      component: FormIdaLaboralComponent,
      //componentProps: { idopcion: idvalue },
      cssClass: 'popover_class',
      //backdropDismiss: false,
      translucent: true
    });
    await popover.present();
    //const { data } = await popover.onDidDismiss();
    const { data } = await popover.onWillDismiss();
  }

  async PopFormMultitrayecto() {
    this.trayecto = 'multi_trayecto';
    const popover = await this.popoverController.create({
      component: FormMultitrayectolaboralComponent,
      //componentProps: { idopcion: idvalue },
      //cssClass: 'popover_class',
      //backdropDismiss: false,
      translucent: true
    });
    await popover.present();
    //const { data } = await popover.onDidDismiss();
    const { data } = await popover.onWillDismiss();
  }

  cambioMotivo(event){
    this.motivo = event.detail.value;
    console.log(this.motivo)

  }

  cambioSolicitarAnticipo(event){
    this.solicitarAnticipo = event.detail.value;
  }

  cambioDesembolso(event){
      this.desembolso = event.detail.value;
  }

  enviarPasajeLaboral(){
    
    let solicitudPasajeLaboral = {
      sessionId:localStorage.getItem("sessionId"),
      motivo:this.motivo,
      solicitaAnticipo: this.solicitarAnticipo,
      descripcion: this.descripcion,
      valorAnticipo: this.valorAnticipo,
      valorAnticipoLetras: this.valorAnticipoLetras,
      tipoDesembolso: this.desembolso,
      fechaRequeridaDesembolso: this.fechaDesembolso,
      trayectoVuelo: this.trayecto,
      numeroViajeroFrecuente: String(this.numeroViajeroFrecuente) ,
      fechaSalida: this.detalleTrayectoIdaVuelta.infoTrayectoIdaVuelta.fechaida,
      fechaLlegada: this.detalleTrayectoIdaVuelta.infoTrayectoIdaVuelta.fechaRegreso,
      horaSalida: this.detalleTrayectoIdaVuelta.infoTrayectoIdaVuelta.horaIda,
      horaLlegada: this.detalleTrayectoIdaVuelta.infoTrayectoIdaVuelta.horaRegreso
    }

    this.suscriptionLaboral = this.servicio.solicitudPasajeLaboral(solicitudPasajeLaboral).subscribe(
      (res)=>{
        this.router.navigate(['/layout'])
        this.presentAlert();

        console.log(res)
      },
      (err)=>{
        console.log(err)
      }
    )
    console.log(solicitudPasajeLaboral)

  }

  async presentAlert() {
    const alert = await this.alert.create({
      subHeader: 'Solicitud',
      message: 'enviada con exito',
      buttons: ['OK']
    });
    await alert.present();
  }




  ngOnDestroy(){
    //if (this.suscriptionLaboral.unsubscribe) {
      //this.suscriptionLaboral.unsubscribe();
    //}
      
  }
}

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
  opcionesFechaIda;
  mesparcial: any;
  diaparcial:any;
  fechaIda: string='';
  solicitaPasaje: string = '';
  ciudadOrigen: string = '';
  ciudadDestino: string = '';


  constructor(public popoverController: PopoverController) { }

  ngOnInit() {

       //fecha ida
this.opcionesFechaIda= {
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
      this.fechaIda = event.year.value + '-' + this.mesparcial + '-' + this.diaparcial;
      
    }
  }, {
    text: 'Cancelar',
    handler: () => {
      console.log('');
    }
  }]
}
  }


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



  cambioSolicitaPasaje(event){

  }

  enviarDetalletrayectoIda(){
    let dataTrayectoIda = {
      ciudadOrigen: this.ciudadOrigen,
      ciudadOrigenId: '1',
      ciudadDestino: this.ciudadDestino,
      ciudadDestinoId:'2',
      fechaida: this.fechaIda,
      fechaRegreso:'',
      solicitaPasaje: this.solicitaPasaje,
      horaIda: '',
      horaRegreso: ''

    }
    this.popoverController.dismiss({
      infoTrayectoIda : dataTrayectoIda
    });
  }
}

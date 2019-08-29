import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-pop-add-pasejeros-personal',
  templateUrl: './pop-add-pasejeros-personal.component.html',
  styleUrls: ['./pop-add-pasejeros-personal.component.scss'],
})
export class PopAddPasejerosPersonalComponent implements OnInit {

  optionspickers;
  fecha_actual: Date = new Date();
  fecha_nacimiento: string = '';
  mesparcial: string = '';
  diaparcial: string = '';
  tipoDocumento: string = '';

  pasajero = {
    documento: null,
    nombres: '',
    apellidos: ''
  }

  constructor(public popoverController: PopoverController) { }

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
          this.fecha_nacimiento = event.year.value + '-' + this.mesparcial + '-' + this.diaparcial;
          
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
    this.tipoDocumento = event.detail.value;

  }

  sendData(){
    let data = {
      tipoDocumento: this.tipoDocumento,
      documento: this.pasajero.documento,
      nombres: this.pasajero.nombres,
      apellidos: this.pasajero.apellidos,
      fecha_nacimiento: this.fecha_nacimiento
    }
    this.popoverController.dismiss({
      pasajero : data
    });
  }
 
}

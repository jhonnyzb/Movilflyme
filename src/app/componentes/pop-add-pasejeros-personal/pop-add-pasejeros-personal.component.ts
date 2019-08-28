import { Component, OnInit } from '@angular/core';

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

  pasajero = {
    documento: null,
    nombres: '',
    apellidos: ''
  }

  constructor() { }

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

          console.log(this.fecha_nacimiento)
          //console.log(event)
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

  }

}

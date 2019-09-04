import { Component, OnInit } from '@angular/core';
import { NavParams, PopoverController } from '@ionic/angular';
import { ServicesAllService } from 'src/app/servicios/services-all.service';

import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-pop-detail-pasajes-personal',
  templateUrl: './pop-detail-pasajes-personal.component.html',
  styleUrls: ['./pop-detail-pasajes-personal.component.scss'],
})
export class PopDetailPasajesPersonalComponent implements OnInit {

  details: any;
  opcion: string = '';
  opcion1: string = '';

  pageActual: number = 1;
  constructor(public navParams:NavParams, private servicio: ServicesAllService, public popoverController: PopoverController, private storage: Storage) { 

    
    this.opcion1 = this.navParams.get('estado');
    this.opcion = this.navParams.get('tipoRegistro');

  }

  ngOnInit() {
    
   this.getDetails();
  }


  getDetails(){
    if(this.opcion1 === 'pasaje_aereo'){
      this.storage.get('sessionId').then(
        (res)=>{
          let consultaPasajes = {
            sessionId: res,
            estado: this.opcion1,
            tipoRegistro: this.opcion
          }
          console.log(consultaPasajes)
          this.servicio.listPasaPorAprobar(consultaPasajes).subscribe(
            (res:any)=>{
              this.details = res.datos.dat
              console.log(res.datos.dat)
            },
            (err)=>{
              console.log(err)
            }
          )
        }
      ).catch(
        erro=> console.log('Error pop-details')
      )
    }



    if(this.opcion1 === 'pasaje_aereo_personal'){

      this.storage.get('sessionId').then(
        (res)=>{
          let consultaPasajes = {
            sessionId: res,
            estado: this.opcion1,
            tipoRegistro: this.opcion
          }
          this.servicio.listPasaPorAprobar(consultaPasajes).subscribe(
            (res:any)=>{
              this.details = res.datos.dat
            },
            (err)=>{
              console.log(err)
            }
          )
        }
      ).catch(
        erro => console.log('Error pop-details')
      )
    }
  }

  cerrarDetallesPasajes(){
    let cerrada = true
    this.popoverController.dismiss({
      cerrada : cerrada
    });
  }

}

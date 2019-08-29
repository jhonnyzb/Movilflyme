import { Component, OnInit } from '@angular/core';
import { NavParams } from '@ionic/angular';
import { ServicesAllService } from 'src/app/servicios/services-all.service';

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
  constructor(public navParams:NavParams, private servicio: ServicesAllService) { 

    
    this.opcion1 = this.navParams.get('estado');
    this.opcion = this.navParams.get('tipoRegistro');

  }

  ngOnInit() {
    
   this.getDetails();
  }


  getDetails(){
    if(this.opcion1 === 'solicitados'){
      this.details = this.servicio.getDetailsPasajes();
    }
    if(this.opcion1 === 'pasaje_aereo'){
      this.servicio.listPasaPorAprobar(this.opcion1, this.opcion).subscribe(
        (res:any)=>{
          console.log(res)
          this.details = res.datos.dat
        },
        (err)=>{
          console.log(err)
        }
      )
    }
    if(this.opcion1 === 'pasaje_aereo_personal'){
      this.servicio.listPasaPorAprobar(this.opcion1, this.opcion).subscribe(

        (res:any)=>{
          console.log(res)
          this.details = res.datos.dat
        },
        (err)=>{
          console.log(err)
        }
      )
    }
  }

}

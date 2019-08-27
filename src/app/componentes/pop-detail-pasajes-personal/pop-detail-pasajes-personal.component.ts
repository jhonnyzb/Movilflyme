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
  pageActual: number = 1;
  constructor(public navParams:NavParams, private servicio: ServicesAllService) { 

    this.opcion = this.navParams.get('idopcion');
  }

  ngOnInit() {
    
   this.getDetails();
  }


  getDetails(){
    if(this.opcion === 'solicitados'){
      this.details = this.servicio.getDetailsPasajes();
    }
    if(this.opcion === 'cotizados'){
      this.details = this.servicio.getDetailsPasajesC();
    }
    if(this.opcion === 'poraprobar'){
      this.servicio.listPasaPorAprobar().subscribe(
        (res:any)=>{
          console.log(res.datos.dat)
          this.details = res.datos.dat
        },
        (err)=>{
          console.log(err)
        }
      )
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { ServicesAllService } from '../servicios/services-all.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  opciones: any;
  opciones_:any;
  
  constructor(private servicio: ServicesAllService) { }

  ngOnInit() {
    this.getOpcion();
  }


getOpcion(){
   this.opciones = this.servicio.opcionHomeTicket();

}

  cambio(event:any){

    if (event.detail.value ==='anticipo') {
      var index = this.opciones.findIndex(obj => obj.value ==='anticipo');
      this.opciones_=this.opciones[index].opcionesInternas;
      console.log(this.opciones_)
    }
   
  }
}

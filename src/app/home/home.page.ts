import { Component, OnInit } from '@angular/core';
import { ServicesAllService } from '../servicios/services-all.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  opciones: any;
  
  constructor(private servicio: ServicesAllService) { }

  ngOnInit() {
    this.getOpcion();
  }


getOpcion(){
   this.opciones = this.servicio.opcionHomeTicket();

}

  cambio(e){
    console.log('si',e)
  }
}

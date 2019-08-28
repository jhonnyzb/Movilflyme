import { Component, OnInit } from '@angular/core';
import { ServicesAllService } from 'src/app/servicios/services-all.service';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-pop-ciudades',
  templateUrl: './pop-ciudades.component.html',
  styleUrls: ['./pop-ciudades.component.scss'],
})
export class PopCiudadesComponent implements OnInit {

  ciudades: any[]=[];
  textoAbuscar = '';
  constructor( private servicio: ServicesAllService,public popoverController: PopoverController) { }

  ngOnInit() {
    this.servicio.getCiudades().subscribe(
      (res:any)=>{
        this.ciudades = res
      }
    )
  }

  buscar(event){
    this.textoAbuscar = event.detail.value;
  }

  clickCiudad(data){
    this.popoverController.dismiss({
      ciudad : data
    });
  }



}

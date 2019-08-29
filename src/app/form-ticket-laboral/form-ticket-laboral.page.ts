import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { TucuentaComponent } from '../componentes/tucuenta/tucuenta.component';

@Component({
  selector: 'app-form-ticket-laboral',
  templateUrl: './form-ticket-laboral.page.html',
  styleUrls: ['./form-ticket-laboral.page.scss'],
})
export class FormTicketLaboralPage implements OnInit {

  fecha: Date = new Date();

  constructor(public popoverController: PopoverController) { }

  ngOnInit() {
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

}

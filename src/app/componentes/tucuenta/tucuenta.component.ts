import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-tucuenta',
  templateUrl: './tucuenta.component.html',
  styleUrls: ['./tucuenta.component.scss'],
})
export class TucuentaComponent implements OnInit {

  constructor(private router: Router, public popoverController: PopoverController) { }

  ngOnInit() {}


  logout(){

    this.popoverController.dismiss();
    localStorage.removeItem("sessionId");
    localStorage.removeItem("token");
    this.router.navigate(['/login']);
    
  }
  CuentaPersonal(){
    this.popoverController.dismiss();
    this.router.navigate(['/cuenta']);
  }

}

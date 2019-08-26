import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ServicesAllService } from '../servicios/services-all.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  Usuario = {
    email: '',
    password: ''
  }

  constructor( private router: Router,private slogin: ServicesAllService, public alert: AlertController) { }

  ngOnInit() {
  }

  LoginForm(){

    this.slogin.login(this.Usuario).subscribe(
      (res:any)=> {
        localStorage.setItem('token',res.access_token)
        this.router.navigate(['/layout'])
      },
      (err)=>{
        this.presentAlert();
        this.router.navigate(['/layout'])
      }
    )

  }


  async presentAlert() {
    const alert = await this.alert.create({
      header: 'Error',
      subHeader: 'Datos Erroneos',
      message: 'Por favor ingrese nuevamente los datos',
      buttons: ['OK']
    });
    await alert.present();
  }


}

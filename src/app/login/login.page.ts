import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ServicesAllService } from '../servicios/services-all.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit, OnDestroy {

  Usuario = {
    email: '',
    password: ''
  }
  suscriptionLogin: Subscription;

  constructor( private router: Router,private slogin: ServicesAllService, public alert: AlertController) { }

  ngOnInit() {
  }

  LoginForm(){
    this.router.navigate(['/layout'])
    this.suscriptionLogin = this.slogin.login(this.Usuario).subscribe(
      (res:any)=> {
        console.log(res)
        localStorage.setItem('token',res.access_token)
        localStorage.setItem('sessionId',res.sessionId)
        this.router.navigate(['/layout'])
      },
      (err)=>{
        this.presentAlert();
        console.log(err)
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


  ngOnDestroy(){
    //this.suscriptionLogin.unsubscribe();

  }

}

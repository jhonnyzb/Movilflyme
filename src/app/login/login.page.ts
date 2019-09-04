import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ServicesAllService } from '../servicios/services-all.service';
import { Storage } from '@ionic/storage';
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

  constructor( private router: Router,private slogin: ServicesAllService, public alert: AlertController, private storage: Storage) { }

  ngOnInit() {
  }

  LoginForm(){
    this.suscriptionLogin = this.slogin.login(this.Usuario).subscribe(
      (res:any)=> {
        console.log(res)
        if (res.codigoRespuesta == 0){
          this.storage.set('token', res.access_token );
          this.storage.set('sessionId', res.sessionId);
          localStorage.setItem('token',res.access_token)
          //localStorage.setItem('sessionId',res.sessionId)
          this.router.navigate(['/layout'])
        }
        if(res.codigoRespuesta == 1001){
          this.presentAlert();
        }      
             },
      (err)=>{
       this.presentAlertErrorBackend(err)
    
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

  async presentAlertErrorBackend(error) {
    const alert = await this.alert.create({
      header: 'Error',
      subHeader: error,
      message: 'Por favor intentelo de nuevo',
      buttons: ['OK']
    });
    await alert.present();
  }


  ngOnDestroy(){
    //this.suscriptionLogin.unsubscribe();

  }

}

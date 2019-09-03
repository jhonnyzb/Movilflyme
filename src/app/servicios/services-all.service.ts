import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { Observable, from } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ServicesAllService {
  details: any;
  Items: any;
  opcion: any;
  baseUrl: string = 'http://10.133.10.2234'
  sesioid: any;
  constructor(private http: HttpClient, private storage: Storage ) { }



  public login(login: any) {
    return this.http.post(this.baseUrl + '/auth/curl', login);

  }


  public register(registro: any) {
    return this.http.post(this.baseUrl + '/admin/persona/agregar', registro, {
    headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem("token")).set('Authorization', 'Bearer ' + localStorage.getItem("sessionId")),
    });
  }


  public listPasaPorAprobar(ConsultaPasajes: any) {
    return this.http.post(this.baseUrl + '/users/curl/consultar', ConsultaPasajes);
  }





  public solicitudPasajepersonal(solicitud: any) {
    return this.http.post(this.baseUrl + '/users/curl/consumirform/personal', solicitud);
  }


  public solicitudPasajeLaboral(solicitud: any) {
    return this.http.post(this.baseUrl + '/users/curl/consumirform/laboral', solicitud);
  }


  getCiudades() {
    return this.http.get('https://restcountries.eu/rest/v2/all');
  }

  getToken (): Observable<any> {
    return from(this.storage.get('token'));
}


  opcionHomeTicket() {
    return this.opcion = [
      {
        id: 1,
        opcion: 'Anticipo',
        value: 'anticipo',
        opcionesInternas: [
          {
            opcion_: 'Por aprobar',
            value_: 'poraprobar',
          },
          {
            opcion_: 'Por desembolsar',
            value_: 'pordesembolsar',
          },
          {
            opcion_: 'Por legalizar',
            value_: 'porlegalizar',
          },
        ]

      },
      {
        id: 2,
        opcion: 'Pasaje aereo',
        value: 'pasaje_aereo',
        opcionesInternas: [
          {
            opcion_: 'Por aprobar',
            value_: 'solicitado',
          },
          {
            opcion_: 'Aprobado',
            value_: 'aprobado',
          },
          {
            opcion_: 'Anulados',
            value_: 'anulado',
          },
          {
            opcion_: 'Rechazados',
            value_: 'rechazado',
          },
        ]
      },
      {
        id: 3,
        opcion: 'Reembolso',
        value: 'reembolso',
        opcionesInternas: [
          {
            opcion_: 'Borrador',
            value_: 'borrador',
          },
          {
            opcion_: 'Por aprobar',
            value_: 'poraprobar',
          },
          {
            opcion_: 'Legalizados x aprobar',
            value_: 'legalizadosxaprobar',
          },
          {
            opcion_: 'Anulados',
            value_: 'anulados',
          },
          {
            opcion_: 'Rechazados',
            value_: 'Rechazados',
          },
        ]
      },
      {
        id: 4,
        opcion: 'Aereo personal',
        value: 'pasaje_aereo_personal',
        opcionesInternas: [
          {
            opcion_: 'Solicitados',
            value_: 'solicitado',
          },
          {
            opcion_: 'Cotizados',
            value_: 'cotizado'
          },
          {
            opcion_: 'Aceptados',
            value_: 'aceptado',
          },
          {
            opcion_: 'Anulados',
            value_: 'anulado',
          },
          {
            opcion_: 'Rechazados',
            value_: 'rechazado',
          },
        ]
      }
    ]
  }


}

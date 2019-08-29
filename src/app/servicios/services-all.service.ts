import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicesAllService {
  details: any;
  Items: any;
  opcion: any;
  baseUrl: string = 'http://10.133.10.221'

  constructor(private http: HttpClient) { }



  public login(login: any) {
    return this.http.post(this.baseUrl + '/auth/curl', login);

  }


  public register(registro: any) {
    return this.http.post(this.baseUrl + '/admin/persona/agregar', registro, {
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem("token")).set('Authorization', 'Bearer ' + localStorage.getItem("sessionId")),
    });



  }
  public listPasaPorAprobar(tipoRegistro:any, estado:any) {
    let sesioid = {
      sessionId: localStorage.getItem("sessionId"),
      estado: estado,
      tipoRegistro: tipoRegistro
    }
    console.log(sesioid)
    return this.http.post(this.baseUrl + '/users/curl/consultar', sesioid, {
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem("token"))
    });

  }

public solicitudPasajepersonal(solicitud:any){
  return this.http.post(this.baseUrl + '/users/curl/consumirform/personal', solicitud, {
    headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem("token"))
  });
}


  public ticketLaboral(fecha: any) {
    //return this.http.post(this.baseUrl + '/admin/persona/agregar', registro, {
    //headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem("token")),
    //});
    return this.http.post('jgjgk', fecha);
  }

  public ticketPersonal(dataTicket: any) {
    //return this.http.post(this.baseUrl + '/admin/persona/agregar', registro, {
    //headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem("token")),
    //});
    return this.http.post('fhg', dataTicket);
  }

  getCiudades() {
    return this.http.get('https://restcountries.eu/rest/v2/all');
  }


  getItems() {

    return this.Items = [
      {
        numero: 1,
        descripcion: 'uno',
      },
      {
        numero: 2,
        descripcion: 'dos',
      },
      {
        numero: 3,
        descripcion: 'tres',
      },
      {
        numero: 4,
        descripcion: 'cuatro',
      },
      {
        numero: 4,
        descripcion: 'cuatro',
      },
      {
        numero: 4,
        descripcion: 'cuatro',
      },
      {
        numero: 4,
        descripcion: 'cuatro',
      },
      {
        numero: 4,
        descripcion: 'cuatro',
      },
      {
        numero: 4,
        descripcion: 'cuatro',
      }, {
        numero: 4,
        descripcion: 'cuatro',
      },
      {
        numero: 4,
        descripcion: 'cuatro',
      },
    ]
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
            value_: 'anulados',
          },
          {
            opcion_: 'Rechazados',
            value_: 'rechazados',
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
            value_: 'cotizados'
          },
          {
            opcion_: 'Aceptados',
            value_: 'aceptados',
          },
          {
            opcion_: 'Anulados',
            value_: 'anulados',
          },
          {
            opcion_: 'Rechazados',
            value_: 'rechazados',
          },
        ]
      }
    ]
  }


  getDetailsPasajes() {

    return this.details = [
      {
        origen: 'Bogota',
        destino: 'Cali',
        fecha: '10-12-2018'
      },
      {
        origen: 'Bogota',
        destino: 'Cali',
        fecha: '10-12-2018'
      },
      {
        origen: 'Bogota',
        destino: 'Cali',
        fecha: '10-12-2018'
      },
      {
        origen: 'Bogota',
        destino: 'Cali',
        fecha: '10-12-2018'
      },
      {
        origen: 'Bogota',
        destino: 'Cali',
        fecha: '10-12-2018'
      },
      {
        origen: 'Bogota',
        destino: 'Cali',
        fecha: '10-12-2018'
      },
      {
        origen: 'Bogota',
        destino: 'Cali',
        fecha: '10-12-2018'
      },
      {
        origen: 'Bogota',
        destino: 'Cali',
        fecha: '10-12-2018'
      },
      {
        origen: 'Bogota',
        destino: 'Cali',
        fecha: '10-12-2018'
      },
      {
        origen: 'Bogota',
        destino: 'Cali',
        fecha: '10-12-2018'
      },
      {
        origen: 'Bogota',
        destino: 'Cali',
        fecha: '10-12-2018'
      },
    ]
  }


  getDetailsPasajesC() {

    return this.details = [
      {
        origen: 'Bogota',
        destino: 'Cali',
        fecha: '10-12-2018'
      },

    ]
  }



}

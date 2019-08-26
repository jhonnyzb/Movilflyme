import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicesAllService {

  Items: any;
  opcion: any;
  baseUrl: string = 'http://10.133.10.175'

  constructor(private http: HttpClient) { }



  public login (login:any){
    //return this.http.post(this.baseUrl + '/auth/login', login);
    return this.http.get('https://jsonplaceholder.typicode.com/users')
  }


  public register(registro: any){
    //return this.http.post(this.baseUrl + '/admin/persona/agregar', registro, {
     //headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem("token")),
    //});
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  
  
  }


  public ticketLaboral(fecha:any){
    //return this.http.post(this.baseUrl + '/admin/persona/agregar', registro, {
     //headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem("token")),
    //});
    return this.http.post('jgjgk', fecha);
  }

  public ticketPersonal(dataTicket:any){
    //return this.http.post(this.baseUrl + '/admin/persona/agregar', registro, {
     //headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem("token")),
    //});
    return this.http.post('fhg', dataTicket);
  }


  getItems(){

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
      },{
        numero: 4,
        descripcion: 'cuatro',
      },
      {
        numero: 4,
        descripcion: 'cuatro',
      },
    ]
  }

opcionHomeTicket(){

  return this.opcion =[
    {
      id: 1,
      opcion: 'Anticipo',
      value: 'anticipo'
     
    },
    {
      id: 2,
      opcion: 'Pasaje aereo',
      value: 'pasajeAereo'
    },
    {
      id: 3,
      opcion: 'Reembolso',
      value : 'reembolso'
    },
    {
      id: 4,
      opcion: 'Aereo personal',
      value: 'aereoPersonal'
    }
  ]
}



}

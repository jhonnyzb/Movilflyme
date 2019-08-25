import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicesAllService {

  Items: any;

  constructor(private http: HttpClient) { }



  public login (login:any){
    return this.http.get('https://jsonplaceholder.typicode.com/users')
  }


  public register(registro: any){

    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  
  
  }


  public ticketLaboral(fecha:any){

    return this.http.post('jgjgk', fecha);
  }

  public ticketPersonal(dataTicket:any){

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


}

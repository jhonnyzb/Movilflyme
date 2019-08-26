import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.page.html',
  styleUrls: ['./calendario.page.scss'],
})
export class CalendarioPage implements OnInit {

  c2019: boolean = true;
  c2020: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  segmentChanged(event){
   if (event.detail.value === '2019') {
     this.c2019 = true;
     this.c2020  = false;
   }
   if (event.detail.value === '2020') {
    this.c2019 = false;
    this.c2020  = true;
  }
   
  }

}

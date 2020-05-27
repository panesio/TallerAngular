import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-verde',
  templateUrl: './verde.component.html',
  styleUrls: ['./verde.component.css']
})
export class VerdeComponent implements OnInit {
  imagen = ['assets/img/viaLactea.jpg'];
  constructor() { }

  ngOnInit(): void {
  }

}

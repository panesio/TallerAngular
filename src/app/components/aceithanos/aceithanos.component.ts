import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aceithanos',
  templateUrl: './aceithanos.component.html',
  styleUrls: ['./aceithanos.component.css']
})
export class AceithanosComponent implements OnInit {

  imagen = ['assets/img/galaxiaTres.jpg'];

  constructor() { }

  ngOnInit(): void {
  }

}

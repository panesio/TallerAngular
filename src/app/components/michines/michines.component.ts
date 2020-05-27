import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-michines',
  templateUrl: './michines.component.html',
  styleUrls: ['./michines.component.css']
})
export class MichinesComponent implements OnInit {

  imagen = ['assets/img/galaxiaCinco.jpg'];

  constructor() { }

  ngOnInit(): void {
  }

}

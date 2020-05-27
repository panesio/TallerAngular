import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kokun',
  templateUrl: './kokun.component.html',
  styleUrls: ['./kokun.component.css']
})
export class KokunComponent implements OnInit {

  imagen = ['assets/img/galaxiaCuatro.jpg'];

  constructor() { }

  ngOnInit(): void {
  }

}

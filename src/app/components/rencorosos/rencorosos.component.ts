import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rencorosos',
  templateUrl: './rencorosos.component.html',
  styleUrls: ['./rencorosos.component.css']
})
export class RencorososComponent implements OnInit {

  imagen = ['assets/img/galaxiaDos.jpeg'];

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ship',
  templateUrl: './ship.component.html',
  styleUrls: ['./ship.component.scss']
})
export class ShipComponent {
  img: string;
  X = 50;
  Y = 100;
  owner: string;
  lifeUnits = [1,1,1,1,1,1,1,1,1];
  
  constructor() { }

  

}

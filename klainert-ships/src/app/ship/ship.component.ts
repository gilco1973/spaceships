import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ship',
  templateUrl: './ship.component.html',
  styleUrls: ['./ship.component.scss']
})
export class ShipComponent {
  @Input() id;
  img: string;
  X = 50;
  Y = 100;
  owner: string;
  lifeUnits = [1,1,1,1,1,1,1,1,1];
  shotId: string = '1000';
  shooting: boolean;
  
  constructor() { }

  

}

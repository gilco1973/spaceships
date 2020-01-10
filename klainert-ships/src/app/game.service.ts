import { Injectable } from '@angular/core';
import { ShipComponent } from './ship/ship.component';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  ship: ShipComponent;
  userName: string;
  ship2: { img: string; X: number; Y: number; owner: string; lifeUnits: number[]; };

  constructor() { }
}

import { Injectable } from '@angular/core';
import { ShipComponent } from './ship/ship.component';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  ship: ShipComponent;
  userName: string;
  ship2: ShipComponent;

  constructor() { }
}

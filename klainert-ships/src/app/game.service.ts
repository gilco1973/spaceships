import { Injectable } from '@angular/core';
import { ShipComponent } from './ship/ship.component';
import { Ship } from './models/Ship';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  ship: Ship;
  userName: string;
  ship2: Ship;

  constructor() { }
}

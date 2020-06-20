import { Component, OnInit } from '@angular/core';
import { Router, Route } from '@angular/router';
import { GameService } from '../game.service';
import { ShipComponent } from '../ship/ship.component';
import { Ship } from '../models/Ship';

@Component({
  selector: 'app-ship-gallery',
  templateUrl: './ship-gallery.component.html',
  styleUrls: ['./ship-gallery.component.scss']
})
export class ShipGalleryComponent implements OnInit {
  ships: Ship[];
  user: string;
  selectedShip: Ship;
  constructor(private router: Router, private gameService: GameService) { }

  ngOnInit() {
    this.ships = [
      {
        id:0,
        img: '../../assets/ship.png',
        X: 50,
        Y: 60,
        owner: this.gameService.userName,
        lifeUnits: [1,1,1,1,1,1,1,1,1],
        shotId:'1000',
        shooting: false
      },
      {
        id:1,
        img: '../../assets/ship2.png',
        X: 50,
        Y: 60,
        owner: this.gameService.userName,
        lifeUnits: [1,1,1,1,1,1,1,1,1],
        shotId:'1001',
        shooting: false,
      }, {
        id:2,
        img: '../../assets/ship3.png',
        X: 50,
        Y: 60,
        owner: this.gameService.userName,
        lifeUnits: [1,1,1,1,1,1,1,1,1],
        shotId:'1002',
        shooting: false,
      }, {
        id:3,
        img: '../../assets/ship4.png',
        X: 50,
        Y: 60,
        owner: this.gameService.userName,
        lifeUnits: [1,1,1,1,1,1,1,1,1],
        shotId:'1003',
        shooting: false,
      }, {
        id:4,
        img: '../../assets/ship5.png',
        X: 50,
        Y: 60,
        owner: this.gameService.userName,
        lifeUnits: [1,1,1,1,1,1,1,1,1],
        shotId:'1004',
        shooting: false,
      }, {
        id:5,
        img: '../../assets/ship6.png',
        X: 50,
        Y: 60,
        owner: this.gameService.userName,
        lifeUnits: [1,1,1,1,1,1,1,1,1],
        shotId:'1005',
        shooting: false,
      }, {
        id:6,
        img: '../../assets/ship7.png',
        X: 50,
        Y: 60,
        owner: this.gameService.userName,
        lifeUnits: [1,1,1,1,1,1,1,1,1],
        shotId:'1006',
        shooting: false,
      }, {
        id:7,
        img: '../../assets/ship8.png',
        X: 50,
        Y: 60,
        owner: this.gameService.userName,
        lifeUnits: [1,1,1,1,1,1,1,1,1],
        shotId:'1007',
        shooting: false,
      }, {
        id:8,
        img: '../../assets/ship9.png',
        X: 50,
        Y: 60,
        owner: this.gameService.userName,
        lifeUnits: [1,1,1,1,1,1,1,1,1],
        shotId:'1008',
        shooting: false,
      }
    ];
  }
  startGame() {
    console.log(this.selectedShip);
    this.gameService.ship = this.selectedShip;
    this.gameService.ship2 = this.ships[7];
    this.router.navigateByUrl('/game');
  }

}

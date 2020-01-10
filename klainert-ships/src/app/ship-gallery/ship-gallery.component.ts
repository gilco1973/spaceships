import { Component, OnInit } from '@angular/core';
import { Router, Route } from '@angular/router';
import { GameService } from '../game.service';
import { ShipComponent } from '../ship/ship.component';

@Component({
  selector: 'app-ship-gallery',
  templateUrl: './ship-gallery.component.html',
  styleUrls: ['./ship-gallery.component.scss']
})
export class ShipGalleryComponent implements OnInit {
  ships: ShipComponent[];
  user: string;
  selectedShip: any;
  constructor(private router: Router, private gameService: GameService) { }

  ngOnInit() {
    this.ships = [
      {
        img: '../../assets/ship.png',
        X: 50,
        Y: 60,
        owner: this.gameService.userName
      },
      {
        img: '../../assets/ship2.png',
        X: 50,
        Y: 60,
        owner: this.gameService.userName
      }, {
        img: '../../assets/ship3.png',
        X: 50,
        Y: 60,
        owner: this.gameService.userName
      }, {
        img: '../../assets/ship4.png',
        X: 50,
        Y: 60,
        owner: this.gameService.userName
      }, {
        img: '../../assets/ship5.png',
        X: 50,
        Y: 60,
        owner: this.gameService.userName
      }, {
        img: '../../assets/ship6.png',
        X: 50,
        Y: 60,
        owner: this.gameService.userName
      }, {
        img: '../../assets/ship7.png',
        X: 50,
        Y: 60,
        owner: this.gameService.userName
      }, {
        img: '../../assets/ship8.png',
        X: 50,
        Y: 60,
        owner: this.gameService.userName
      }, {
        img: '../../assets/ship9.png',
        X: 50,
        Y: 60,
        owner: this.gameService.userName
      }
    ];
  }
  startGame() {
    console.log(this.selectedShip);
    this.gameService.ship = this.selectedShip;
    this.router.navigateByUrl('/game');
  }

}

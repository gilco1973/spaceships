import { Component, OnInit } from '@angular/core';
import { Router, Route } from '@angular/router';
import { GameService } from '../game.service';

@Component({
  selector: 'app-ship-gallery',
  templateUrl: './ship-gallery.component.html',
  styleUrls: ['./ship-gallery.component.scss']
})
export class ShipGalleryComponent implements OnInit {
  ships: any[];
  selectedShip: any;
  constructor(private router:Router, private gameService:GameService) { }

  ngOnInit() {
    this.ships = [
      {
        img: '../../assets/ship.png'
      },
      {
        img: '../../assets/ship2.png'
      }, {
        img: '../../assets/ship3.png'
      }, {
        img: '../../assets/ship4.png'
      }, {
        img: '../../assets/ship5.png'
      }, {
        img: '../../assets/ship6.png'
      }, {
        img: '../../assets/ship7.png'
      }, {
        img: '../../assets/ship8.png'
      }, {
        img: '../../assets/ship9.png'
      }
    ];
  }
  startGame(){
    console.log(this.selectedShip);
    this.gameService.ship = this.selectedShip;
    this.router.navigateByUrl('/game');
  }

}

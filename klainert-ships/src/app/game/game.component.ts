import { Component, OnInit, AfterViewInit, HostListener } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GameService } from '../game.service';


@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit, AfterViewInit {
  @HostListener('document:keydown.arrowleft')
moveLeft() {
  console.log('listener key left');
}


@HostListener('document:keydown.arrowright')
moveRight() {
  console.log('listener key right');
}
  ship: any;

  constructor(private gameService: GameService) {
    this.ship = this.gameService.ship;
  }


  ngOnInit() {
  }
  ngAfterViewInit(): void {
    var element = document.getElementById('ship1');
    element.className= 'ship';
    element.style.backgroundImage = 'url('+this.ship.img +')';
  }
  keyClicked(event){
    var element = document.getElementById('ship1');
    switch(event.keyCode){
      case 37:
        console.log('key left');
        
        break;
        case 38:
        console.log('key up');
        break;
        case 39:
        console.log('key right');
        break;
        case 40:
        console.log('key down');
        break;
    }
  }
}

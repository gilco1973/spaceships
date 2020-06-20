import { Component, OnInit, AfterViewInit, HostListener, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GameService } from '../game.service';
import { ShipComponent } from '../ship/ship.component';
import { Ship } from '../models/Ship';


@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit, AfterViewInit {
  @ViewChild('ship', { static: true }) ship: ShipComponent;
  keysDown = [];
  ship2: Ship;
  asteroids = [{ x: 650, y: 200}, { x: 430,  y: 345}, { x: 810,  y: 250}, { x: 700,  y: 400}];

  @HostListener('document:keydown.space')
  shoot() {
    this.ship.shoot(this.asteroids);
  }
  @HostListener('document:keydown.arrowleft')
  moveLeft() {
    console.log('listener key left');
    const element = document.getElementById(this.ship.id.toString());
    this.ship.X -= 17;
    if (this.ship.X < 50) {
      this.ship.X = 50;
    }
    element.style.transform = 'translate(' + (this.ship.X) + 'px,' + (this.ship.Y) + 'px)';
    console.log('X:' + this.ship.X);
    // var element2 = document.getElementById(this.ship2.id);
    // this.ship2.X = this.ship.X + 400;

    // element2.style.transform = 'translate(' + (this.ship2.X) + 'px,' + (this.ship2.Y) + 'px)';
  }


  @HostListener('document:keydown.arrowright')
  moveRight() {
    console.log('listener key right');
    const element = document.getElementById(this.ship.id.toString());
    this.ship.X += 17;
    if (this.ship.X > 950) {
      this.ship.X = 950;
    }
    element.style.transform = 'translate(' + (this.ship.X) + 'px,' + (this.ship.Y) + 'px)';
    console.log('X:' + this.ship.X);
    // var element2 = document.getElementById(this.ship2.id);
    // this.ship2.X = this.ship.X + 400;

    // element2.style.transform = 'translate(' + (this.ship2.X) + 'px,' + (this.ship2.Y) + 'px)';
  }

  @HostListener('document:keydown.arrowup')
  moveUp() {
    console.log('listener key up');
    const element = document.getElementById(this.ship.id.toString());
    this.ship.Y -= 17;
    if (this.ship.Y < 50) {
      this.ship.Y = 50;
    }
    element.style.transform = 'translate(' + (this.ship.X) + 'px,' + (this.ship.Y) + 'px)';
    console.log('Y:' + this.ship.Y);

    // var element2 = document.getElementById(this.ship2.id);
    // this.ship2.Y = this.ship.Y;

    // element2.style.transform = 'translate(' + (this.ship2.X) + 'px,' + (this.ship2.Y) + 'px)';
  }

  @HostListener('document:keydown.arrowdown')
  moveDown() {
    console.log('listener key down');
    const element = document.getElementById(this.ship.id.toString());
    this.ship.Y += 17;
    if (this.ship.Y > 750) {
      this.ship.Y = 750;
    }
    element.style.transform = 'translate(' + (this.ship.X) + 'px,' + (this.ship.Y) + 'px)';
    console.log('Y:' + this.ship.Y);

    // var element2 = document.getElementById(this.ship2.id);
    // this.ship2.Y = this.ship.Y;

    // element2.style.transform = 'translate(' + (this.ship2.X) + 'px,' + (this.ship2.Y) + 'px)';
  }


  constructor(private router: Router, private gameService: GameService) {

  }


  ngOnInit() {
    this.registerEventHandlers();
  }
  ngAfterViewInit(): void {

    // var element2 = document.getElementById(this.ship2.id);
    // element2.className = 'ship';
    // element2.style.backgroundImage = 'url(' + this.ship2.img + ')';
    if (!this.ship || !this.gameService.ship) {
      this.router.navigateByUrl('/login');
    }
    this.ship.shotId = this.gameService.ship.shotId;
    this.ship.id = this.gameService.ship.id;
    this.ship.X = this.gameService.ship.X;
    this.ship.Y = this.gameService.ship.Y;
    this.ship.img = this.gameService.ship.img;
    this.ship.lifeUnits = this.gameService.ship.lifeUnits;
    this.ship.owner = this.gameService.ship.owner;
    this.ship.shooting = this.gameService.ship.shooting;
  }
  registerEventHandlers() {
    /**
     * Event handlers
     */
    document.addEventListener('keydown', (e) => {
      var keyCode = e.which;
      if (this.keysDown.indexOf(keyCode) === -1) {
        this.keysDown.push(keyCode);

      }
    });
    document.addEventListener('keyup', (e) => {
      var keyCode = e.which;
      this.keysDown.splice(this.keysDown.indexOf(keyCode), 1);
    });

    document.addEventListener('shot', (e: any) => {
      var position = e.detail;
      //score += 100 * shotFactory.firepower();
      // levelPlayer.alienRemoved();
      // sfx.sounds.explosion.play(position.x, position.y, position.z);
    });




  }
}

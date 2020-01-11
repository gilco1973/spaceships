import { Component, OnInit, AfterViewInit, HostListener } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GameService } from '../game.service';
import { ShipComponent } from '../ship/ship.component';


@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit, AfterViewInit {
  ship: ShipComponent;
  keysDown = [];
  ship2: ShipComponent;

  @HostListener('document:keydown.space')
  shoot() {
    console.log('listener key space');
    if (this.ship.shooting) {
      return;
    }
    var shot: any = document.getElementById(this.ship.shotId);

    let idx = 0;
    let audio = new Audio();
    audio.src = "../../assets/sfx/gun.mp3";
    audio.load();
    audio.play();
    const x = this.ship.X;
    const y = this.ship.Y;
    this.ship.shooting = true;
    shot.hidden= false;
    let inter = setInterval(() => {
      idx += 3;
      if (idx > 500) {
        clearInterval(inter);
        this.ship.shooting = false;
        shot.hidden = true;
      }
      shot.style.transform = 'translate(' + (x + idx) + 'px,' + (y + 12) + 'px)';
    }, 1);


  }
  @HostListener('document:keydown.arrowleft')
  moveLeft() {
    console.log('listener key left');
    var element = document.getElementById(this.ship.id);
    this.ship.X -= 17;
    if (this.ship.X < 50) {
      this.ship.X = 50;
    }
    element.style.transform = 'translate(' + (this.ship.X) + 'px,' + (this.ship.Y) + 'px)';
    console.log('X:' + this.ship.X);
    var element2 = document.getElementById(this.ship2.id);
    this.ship2.X = this.ship.X + 400;

    element2.style.transform = 'translate(' + (this.ship2.X) + 'px,' + (this.ship2.Y) + 'px)';
  }


  @HostListener('document:keydown.arrowright')
  moveRight() {
    console.log('listener key right');
    var element = document.getElementById(this.ship.id);
    this.ship.X += 17;
    if (this.ship.X > 950) {
      this.ship.X = 950;
    }
    element.style.transform = 'translate(' + (this.ship.X) + 'px,' + (this.ship.Y) + 'px)';
    console.log('X:' + this.ship.X);
    var element2 = document.getElementById(this.ship2.id);
    this.ship2.X = this.ship.X + 400;

    element2.style.transform = 'translate(' + (this.ship2.X) + 'px,' + (this.ship2.Y) + 'px)';
  }

  @HostListener('document:keydown.arrowup')
  moveUp() {
    console.log('listener key up');
    var element = document.getElementById(this.ship.id);
    this.ship.Y -= 17;
    if (this.ship.Y < 50) {
      this.ship.Y = 50;
    }
    element.style.transform = 'translate(' + (this.ship.X) + 'px,' + (this.ship.Y) + 'px)';
    console.log('Y:' + this.ship.Y);

    var element2 = document.getElementById(this.ship2.id);
    this.ship2.Y = this.ship.Y;

    element2.style.transform = 'translate(' + (this.ship2.X) + 'px,' + (this.ship2.Y) + 'px)';
  }

  @HostListener('document:keydown.arrowdown')
  moveDown() {
    console.log('listener key down');
    var element = document.getElementById(this.ship.id);
    this.ship.Y += 17;
    if (this.ship.Y > 750) {
      this.ship.Y = 750;
    }
    element.style.transform = 'translate(' + (this.ship.X) + 'px,' + (this.ship.Y) + 'px)';
    console.log('Y:' + this.ship.Y);

    var element2 = document.getElementById(this.ship2.id);
    this.ship2.Y = this.ship.Y;

    element2.style.transform = 'translate(' + (this.ship2.X) + 'px,' + (this.ship2.Y) + 'px)';
  }


  constructor(private router: Router, private gameService: GameService) {
    this.ship = this.gameService.ship;
    if (!this.ship) {
      this.router.navigateByUrl('/login');
    }
    this.ship2 = this.gameService.ship2;
  }


  ngOnInit() {
    this.registerEventHandlers();
  }
  ngAfterViewInit(): void {
    var element = document.getElementById(this.ship.id);
    element.className = 'ship';
    element.style.backgroundImage = 'url(' + this.ship.img + ')';
    var element2 = document.getElementById(this.ship2.id);
    element2.className = 'ship';
    element2.style.backgroundImage = 'url(' + this.ship2.img + ')';
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

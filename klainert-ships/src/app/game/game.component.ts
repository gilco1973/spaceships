import { Component, OnInit, AfterViewInit, HostListener } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GameService } from '../game.service';
import { ShipComponent } from '../ship/ship.component';


@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit, AfterViewInit {
  ship: ShipComponent;
  keysDown =[];
  shooting = false;
  @HostListener('document:keydown.space')
  shoot() {
    console.log('listener key space');
    if (this.shooting) {
      return;
    }
    var shot: any = document.getElementById('shot');
    
    let idx = 0;
    let audio = new Audio();
    audio.src = "../../assets/sfx/gun.mp3";
    audio.load();
    audio.play();
    const x = this.ship.X;
    const y = this.ship.Y;
    this.shooting = true;
    let inter = setInterval(() => {
      idx+=3;
      if (idx > 500) {
        clearInterval(inter);
        this.shooting = false;
      }
      shot.style.transform = 'translate(' + (x + idx) + 'px,' + (y + 12) + 'px)';
    }, 1);


  }
  @HostListener('document:keydown.arrowleft')
  moveLeft() {
    console.log('listener key left');
    var element = document.getElementById('ship1');
    this.ship.X -= 17;
    element.style.transform = 'translate(' + (this.ship.X) + 'px,' + (this.ship.Y) + 'px)';
    console.log('X:' + this.ship.X);
  }


  @HostListener('document:keydown.arrowright')
  moveRight() {
    console.log('listener key right');
    var element = document.getElementById('ship1');
    this.ship.X += 17;
    element.style.transform = 'translate(' + (this.ship.X) + 'px,' + (this.ship.Y) + 'px)';
    console.log('X:' + this.ship.X);
  }

  @HostListener('document:keydown.arrowup')
  moveUp() {
    console.log('listener key up');
    var element = document.getElementById('ship1');
    this.ship.Y -= 17;
    element.style.transform = 'translate(' + (this.ship.X) + 'px,' + (this.ship.Y) + 'px)';
    console.log('Y:' + this.ship.Y);
  }

  @HostListener('document:keydown.arrowdown')
  moveDown() {
    console.log('listener key down');
    var element = document.getElementById('ship1');
    this.ship.Y += 17;
    element.style.transform = 'translate(' + (this.ship.X) + 'px,' + (this.ship.Y) + 'px)';
    console.log('Y:' + this.ship.Y);
  }


  constructor(private gameService: GameService) {
    this.ship = this.gameService.ship;
  }


  ngOnInit() {

        this.registerEventHandlers();
  }
  ngAfterViewInit(): void {
    var element = document.getElementById('ship1');
    element.className = 'ship';
    element.style.backgroundImage = 'url(' + this.ship.img + ')';
  }
  registerEventHandlers() {
    /**
     * Event handlers
     */
    document.addEventListener('keydown',  (e)=> {
        var keyCode = e.which;
        if (this.keysDown.indexOf(keyCode) === -1) {
            this.keysDown.push(keyCode);
            
        }
    });
    document.addEventListener('keyup',  (e)=> {
        var keyCode = e.which;
        this.keysDown.splice(this.keysDown.indexOf(keyCode), 1);
    });

    document.addEventListener('shot',  (e:any)=> {
        var position = e.detail;
        //score += 100 * shotFactory.firepower();
       // levelPlayer.alienRemoved();
       // sfx.sounds.explosion.play(position.x, position.y, position.z);
    });

    

    
}
}

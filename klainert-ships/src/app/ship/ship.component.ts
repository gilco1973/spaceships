import { Component, OnInit, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-ship',
  templateUrl: './ship.component.html',
  styleUrls: ['./ship.component.scss']
})
export class ShipComponent implements OnChanges {
  @ViewChild('btnImg', {static: false}) btnImg;
  @Input() img: string;
  @Input() id: number;
  @Input() shotId: string;
  @Input() X = 50;
  @Input() Y = 100;
  @Input() owner: string;
  @Input() lifeUnits = [1, 1, 1, 1, 1, 1, 1, 1, 1];
  @Input() shooting: boolean;
  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    if (this.btnImg && changes.img && changes.img.currentValue) { 
      this.btnImg.style.background = 'url(img)';
    }
  }
  public shoot(asteroids) {
    console.log('listener key space');
    if (this.shooting) {
      return;
    }
    let shot: any = document.getElementById(this.shotId);

    let idx = 0;
    const audio = new Audio();
    audio.src = '../../assets/sfx/gun.mp3';
    audio.load();
    audio.play();
    const x = this.X;
    const y = this.Y;
    this.shooting = true;
    shot.hidden = false;
    const inter = setInterval(() => {
      idx += 3;
      const shotX = (x + idx);
      const shotY = (y + 12);
      if (idx > 1500 || this.isShipHit(this.shotId) || this.asteroidHit(asteroids, shotX, shotY)) {
        if (this.isShipHit(this.shotId)) {
          console.log('ship hit!!!');
        }
        if (this.asteroidHit(asteroids, shotX, shotY)) {
          console.log('asteroid hit!!!');
        }
        clearInterval(inter);
        this.shooting = false;
        shot.hidden = true;
      }
      
      shot.style.transform = 'translate(' + shotX + 'px,' + shotY + 'px)';
    }, 1);


  }
  asteroidHit(asteroids: any, shotX, shotY): boolean {
    asteroids.forEach(asteroid => {
      if ((asteroid.x >= shotX+40 || asteroid.x <= shotX+40) && (asteroid.y >= shotY+40 || asteroid.y <= shotY+40)) {
        return true;
      }
    });
    return false;
  }
  isShipHit(shotId: string): boolean {
    return shotId !== this.shotId;
  }


}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ship-gallery',
  templateUrl: './ship-gallery.component.html',
  styleUrls: ['./ship-gallery.component.scss']
})
export class ShipGalleryComponent implements OnInit {
  ships: any[];
  constructor() { }

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

}

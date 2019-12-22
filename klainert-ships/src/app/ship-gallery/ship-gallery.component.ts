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
        img: '../../assets/ship2.jpg'
      }, {
        img: '../../assets/ship3.jpg'
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
      }, {
        img: '../../assets/ship10.png'
      }, {
        img: '../../assets/ship11.png'
      }, {
        img: '../../assets/ship12.png'
      }
    ];
  }

}

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ship-frame',
  templateUrl: './ship-frame.component.html',
  styleUrls: ['./ship-frame.component.scss']
})
export class ShipFrameComponent implements OnInit {
  @Input() img;
  constructor() { }

  ngOnInit() {
  }

}

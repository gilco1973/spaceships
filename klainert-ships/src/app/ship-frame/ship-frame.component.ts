import { Component, OnInit, Input } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-ship-frame',
  templateUrl: './ship-frame.component.html',
  styleUrls: ['./ship-frame.component.scss'],
  animations: [
    // Each unique animation requires its own trigger. The first argument of the trigger function is the name
    trigger('rotatedState', [
      state('default', style({ transform: 'rotate(0)' })),
      state('rotated', style({ transform: 'rotate(360deg)' })),
      transition('rotated => default', animate('500ms ease-out')),
      transition('default => rotated', animate('500ms ease-in'))
    ])
  ]
})
export class ShipFrameComponent implements OnInit {
  @Input() img;
  state: string = 'default';
  constructor() { }

  ngOnInit() {
  }


  rotate() {
    this.state = (this.state === 'default' ? 'rotated' : 'default');
  }
}

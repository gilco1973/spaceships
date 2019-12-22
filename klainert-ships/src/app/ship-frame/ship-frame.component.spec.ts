import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipFrameComponent } from './ship-frame.component';

describe('ShipFrameComponent', () => {
  let component: ShipFrameComponent;
  let fixture: ComponentFixture<ShipFrameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShipFrameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipGalleryComponent } from './ship-gallery.component';

describe('ShipGalleryComponent', () => {
  let component: ShipGalleryComponent;
  let fixture: ComponentFixture<ShipGalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShipGalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { ShipGalleryComponent } from './ship-gallery/ship-gallery.component';
import { ShipFrameComponent } from './ship-frame/ship-frame.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GameComponent } from './game/game.component';
import { ShipComponent } from './ship/ship.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ShipGalleryComponent,
    ShipFrameComponent,
    GameComponent,
    ShipComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { ShipGalleryComponent } from './ship-gallery/ship-gallery.component';
import { ShipFrameComponent } from './ship-frame/ship-frame.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ShipGalleryComponent,
    ShipFrameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

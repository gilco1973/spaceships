import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ShipGalleryComponent } from './ship-gallery/ship-gallery.component';
import { GameComponent } from './game/game.component';


const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'ships',
    component: ShipGalleryComponent
  },
  {
    path: 'game',
    component: GameComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from '../app/home/home.component';
import { PlayerComponent } from '../app/player/player.component';
import { PlayerListComponent } from '../app/player-list/player-list.component';
import { PageNotFoundComponent } from '../app/page-not-found/page-not-found.component';

import * as jQuery from 'jquery';
//import { AlertModule } from 'ng2-bootstrap/ng2-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PlayerListComponent,
    PlayerComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    //AlertModule,
    RouterModule.forRoot([
          { path: 'player/:id', component: PlayerComponent },
          {
            path: 'players',
            component: PlayerListComponent,
            data: {
              title: 'Heroes List'
            }
          },
          { path: '', component: HomeComponent },
          { path: '**', component: PageNotFoundComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

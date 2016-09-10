import { NgModule }      from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { routing, appRoutingProviders } from './app.routing';
//import { HeroListComponent } from './hero-list.component';
import { CrisisListComponent } from './crisis-list.component';

import {HeroesModule} from './heroes/heroes.module'

@NgModule({
  imports: [ BrowserModule,
  FormsModule,
  routing,
  HeroesModule
  ],
  declarations: [ AppComponent,CrisisListComponent ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

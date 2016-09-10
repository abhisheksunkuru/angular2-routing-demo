import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { HeroListComponent } from './hero-list.component';
import { HeroDetailComponent } from './hero-detail.component';
import { heroesRouting } from './heroes.routing';
import { HeroService } from './hero.service';
//import { heroesRouting } from './heroes.routing';
@NgModule({
  imports:[
    CommonModule,
    FormsModule,
    heroesRouting
  ],
  declarations: [
    HeroListComponent,
    HeroDetailComponent
  ],
  providers: [
    HeroService
  ]
})
export class HeroesModule{

}
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeroListComponent } from './hero-list.component';
import { HeroDetailComponent } from './hero-detail.component'

const heroesRoutes: Routes = [
  { path: 'heroes', component: HeroListComponent},
  { path: 'heroes/:id', component: HeroDetailComponent }
]

export const heroesRouting: ModuleWithProviders = RouterModule.forChild(heroesRoutes);
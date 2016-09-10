import { ModuleWithProviders } from '@angular/core';
import {Routes,RouterModule} from '@angular/router';

import { CrisisListComponent }  from './crisis-list.component';
import { HeroListComponent }    from './hero-list.component';

const appRoutes: Routes = [
  {path: 'crisis-center',component:CrisisListComponent}
];
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes)
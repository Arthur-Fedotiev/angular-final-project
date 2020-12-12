import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesRoutingModule } from './heroes-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';
import { HeroesComponent } from './heroes.component';
import { HeroesListComponent } from './heroes-list/heroes-list.component';
import { HeroesSearchComponent } from './heroes-search/heroes-search.component';
import { ReusedComponentsModule } from '../reused-components.module';
import { MaterialElevationDirective } from '../shared/directives/material-elevation.directive.directive';

@NgModule({
  declarations: [
    HeroesComponent,
    HeroesListComponent,
    HeroesSearchComponent,
    MaterialElevationDirective,
  ],
  imports: [
    CommonModule,
    HeroesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ReusedComponentsModule,
    MaterialModule,
  ],
})
export class HeroesModule {}

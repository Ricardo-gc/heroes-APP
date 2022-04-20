import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesRoutingModule } from './heroes-routing.module';

import { AddHeroesComponent } from './pages/add-heroes/add-heroes.component';
import { SearchHeroesComponent } from './pages/search-heroes/search-heroes.component';
import { HeroeComponent } from './pages/heroe/heroe.component';
import { HeroesHomeComponent } from './pages/heroes-home/heroes-home.component';
import { ListComponent } from './pages/list/list.component';



@NgModule({
  declarations: [
    AddHeroesComponent,
    SearchHeroesComponent,
    HeroeComponent,
    HeroesHomeComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    HeroesRoutingModule
  ]
})
export class HeroesModule { }

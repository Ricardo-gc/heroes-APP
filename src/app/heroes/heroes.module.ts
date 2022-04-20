import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { HeroesRoutingModule } from './heroes-routing.module';
import { MaterialModule } from '../material/material.module';

import { AddHeroesComponent } from './pages/add-heroes/add-heroes.component';
import { SearchHeroesComponent } from './pages/search-heroes/search-heroes.component';
import { HeroeComponent } from './pages/heroe/heroe.component';
import { HeroesHomeComponent } from './pages/heroes-home/heroes-home.component';
import { ListComponent } from './pages/list/list.component';
import { HeroeTarjetaComponent } from './components/heroe-tarjeta/heroe-tarjeta.component';



@NgModule({
  declarations: [
    AddHeroesComponent,
    SearchHeroesComponent,
    HeroeComponent,
    HeroesHomeComponent,
    ListComponent,
    HeroeTarjetaComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MaterialModule,
    HeroesRoutingModule,
    
  ]
})
export class HeroesModule { }

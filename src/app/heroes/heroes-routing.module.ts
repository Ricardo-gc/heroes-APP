import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListComponent } from './pages/list/list.component';
import { AddHeroesComponent } from './pages/add-heroes/add-heroes.component';
import { SearchHeroesComponent } from './pages/search-heroes/search-heroes.component';
import { HeroeComponent } from './pages/heroe/heroe.component';
import { HeroesHomeComponent } from './pages/heroes-home/heroes-home.component';

const routes: Routes =[
  {
    path: '',
    component: HeroesHomeComponent,
    children: [
      {
        path: 'listado',
        component: ListComponent
      },
      {
        path: 'agregar',
        component: AddHeroesComponent
      },
      {
        path: 'editar/:id',
        component: AddHeroesComponent
      },
      {
        path: 'buscar',
        component: SearchHeroesComponent
      },
      {
        path: ':id',
        component: HeroeComponent
      },
      {
        path: '**',
        redirectTo: 'listado'
      }
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild( routes )
  ],
  exports: [
    RouterModule
  ]
})
export class HeroesRoutingModule { }

import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Heroe } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-search-heroes',
  templateUrl: './search-heroes.component.html',
  styles: [
  ]
})
export class SearchHeroesComponent implements OnInit {
  termino: string = '';
  heroes: Heroe[] = [];
  heroeInfo!: Heroe | undefined;
  constructor( private heroesService: HeroesService ) { }

  ngOnInit(): void {
  }
  buscando(){
    this.heroesService.getSugerencias(this.termino.trim())
    .subscribe( heroes => this.heroes = heroes)
  }

  opcionSeleccionada(event: MatAutocompleteSelectedEvent){
    if(!event.option.value){
      this.heroeInfo = undefined;
      return;
    } 
    const heroe: Heroe = event.option.value;
    this.termino = heroe.superhero;
    this.heroesService.getHeroeById(heroe.id!)
      .subscribe(heroe => this.heroeInfo = heroe)
  }
}

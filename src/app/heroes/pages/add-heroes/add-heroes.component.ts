import { Component, OnInit } from '@angular/core';
import { Heroe, Publisher } from '../../interfaces/heroes.interface';
import { switchMap } from "rxjs/operators";

import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-add-heroes',
  templateUrl: './add-heroes.component.html',
  styles: [`
    img{
      width: 100%;
      border-radius: 5px;
    }
  `
  ]
})
export class AddHeroesComponent implements OnInit {
  publishers = [
    {
      id: 'DC Comics',
      description: 'DC - Comics'
    },
    {
      id: 'Marvel Comics',
      description: 'Marvel - Comics'
    }
  ];

  heroe: Heroe = {
    superhero: '',
    alter_ego: '',
    characters: '',
    publisher: Publisher.DCComics,
    first_appearance: '',
    alt_img: ''
  }
  constructor(private heroesService: HeroesService,
              private activatedRoute: ActivatedRoute, 
              private router: Router) { }

  ngOnInit(): void {

    if ( this.router.url.includes('agregar') ){
      return;
    }
    this.activatedRoute.params
      .pipe(switchMap(({id}) => this.heroesService.getHeroeById(id)))
      .subscribe( heroe => this.heroe = heroe);
  }
  save(){
    if(this.heroe.superhero.trim().length === 0){
      return;
    }

    console.log(this.heroe.id);
    
    if(this.heroe.id){
      //Update
      this.heroesService.putHeroe(this.heroe)
        .subscribe((heroe) => console.log('Actualizando: ',heroe))
    }else{
      //Create
      this.heroesService.postHeroe(this.heroe)
        .subscribe(heroe => {
          this.router.navigate(['/heroes/editar', heroe.id]);
        })
    }
  }

  borrarHeroe(){
    this.heroesService.deleteHeroe(this.heroe.id!)
    .subscribe(resp => {
      this.router.navigate(['/heroes']);
    })
  }
}

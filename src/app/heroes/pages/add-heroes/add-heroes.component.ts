import { Component, OnInit } from '@angular/core';
import { Heroe, Publisher } from '../../interfaces/heroes.interface';
import { switchMap } from "rxjs/operators";

import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
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
              private router: Router,
              private snackBar: MatSnackBar) { }

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
        .subscribe((heroe) => this.mostrarsnackBar('Registro actualizado') )
    }else{
      //Create
      this.heroesService.postHeroe(this.heroe)
        .subscribe(heroe => {
          this.router.navigate(['/heroes/editar', heroe.id]);
          this.mostrarsnackBar('Registro creado');
        })
    }
  }

  borrarHeroe(){
    this.heroesService.deleteHeroe(this.heroe.id!)
    .subscribe(resp => {
      this.router.navigate(['/heroes']);
    })
  }

  mostrarsnackBar(mensaje: string): void{
    this.snackBar.open(mensaje, 'Close', {
      duration: 2000,

    });
  }
}

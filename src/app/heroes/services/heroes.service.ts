import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Heroe } from '../interfaces/heroes.interface';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {
  private baseURL: string = environment.baseURL;
  constructor(private http: HttpClient) { }

  getHeroes(): Observable<Heroe[]>{
    return this.http.get<Heroe[]>(`${this.baseURL}/heroes`)
  }

  getHeroeById(idHeroe: string): Observable<Heroe>{
    return this.http.get<Heroe>(`${this.baseURL}/heroes/${idHeroe}`)
  }

  getSugerencias(termino: string): Observable<Heroe[]>{
    return this.http.get<Heroe[]>(`${this.baseURL}/heroes?q=${termino}&_limit=5`)
  }

  postHeroe(heroe: Heroe): Observable<Heroe>{
    return this.http.post<Heroe>(`${this.baseURL}/heroes/`, heroe);
  }

  putHeroe(heroe: Heroe): Observable<Heroe>{
    return this.http.put<Heroe>(`${this.baseURL}/heroes/${heroe.id}`, heroe);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Auth } from '../interfaces/auth.interface';
import { tap, map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseURL: string = environment.baseURL;
  private _auth: Auth | undefined;

  constructor(private httpClient: HttpClient) { }

  get Auth(): Auth{
    return {...this._auth!}
  }

  verfiyAuth(): Observable<boolean>{
    if(!(localStorage.getItem('token'))){
      return of(false);
    }
    return this.httpClient.get<Auth>(`${this.baseURL}/usuarios/1`)
      .pipe(
        map(auth => {
          this._auth = auth;
          return true;
        })
      )
  }
  login(){
    return this.httpClient.get<Auth>(`${this.baseURL}/usuarios/1`)
            .pipe(
              tap(auth  => this._auth = auth),
              tap(auth => localStorage.setItem('token', auth.id))
            );
  }

  logout(){
    this._auth = undefined;
  }
}

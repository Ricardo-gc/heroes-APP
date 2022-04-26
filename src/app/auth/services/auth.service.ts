import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Auth } from '../interfaces/auth.interface';
import { tap } from 'rxjs/operators';

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
  login(){
    return this.httpClient.get<Auth>(`${this.baseURL}/usuarios/1`)
            .pipe(
              tap(auth  => this._auth = auth)
            );
  }
}

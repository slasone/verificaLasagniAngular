import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login } from './person/login';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  newLogin(login: Login) {
    throw new Error('Method not implemented.');
  }

  constructor(private httpClient: HttpClient ) { }

  add(item:any) : Observable<any> {
    return this.httpClient.post('http://localhost:8080/register', item);
  }

  ricerca(item:any) : Observable<any> {
    return this.httpClient.post('http://localhost:8080/login', item);
  }
}

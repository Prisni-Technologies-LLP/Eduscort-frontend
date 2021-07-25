import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from './login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private baseUrl='http://localhost:8083/secure/auth/'; 

  constructor(private http:HttpClient) { }
  validateLogin(l: object): Observable<object>{
    return this.http.post(`${this.baseUrl}`+'loginUser/', l); 
  }
}

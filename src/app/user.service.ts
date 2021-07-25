import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User }  from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = 'http://localhost:8083/secure/auth/';  
  
  constructor(private http:HttpClient) { }  
  register(user: object): Observable<object> {  
    
    return this.http.post(`${this.baseUrl}`+'user/add/', user);  
  }  
  validateLogin(u: object): Observable<object>{
    return this.http.post(`${this.baseUrl}`+'loginUser/', u); 
  }
}

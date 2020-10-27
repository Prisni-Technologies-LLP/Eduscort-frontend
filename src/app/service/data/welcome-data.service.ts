/**
 * copyright Prisni Technologies LLP.
 * Author: Debabrata Mukherjee
 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export class HelloWorldBean{
    constructor(public message:String){}
}

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(private http:HttpClient) { }
  public executeHelloWorldBeanService(): Observable<any>{
    return this.http.get<HelloWorldBean>('http://localhost:8080/hello-world-bean');
    //console.log("Execute Hello World bean service");

  }
}

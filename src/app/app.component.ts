/**
 * copyright Prisni Technologies LLP.
 * Author: Debabrata Mukherjee
 */
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from './service/data/welcome-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'StudentFormCRUD';
  messageFromService:String;
  errorMessage:String;
  constructor(private route:ActivatedRoute,
    private service:WelcomeDataService){}
  public getWelComeMessage(){
    this.service.executeHelloWorldBeanService().subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorMessage(error)
    );
    //console.log("Get welcome message");
  }
  handleSuccessfulResponse(response){
    this.messageFromService=response.message;
  }
  handleErrorMessage(error){
    this.errorMessage=error.error.message;
  }
}

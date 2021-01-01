/**
 * copyright Prisni Technologies LLP.
 * Author: Debabrata Mukherjee
 */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {

  constructor(private router:Router) { }

  
  goToStudentCRUD(){
    this.router.navigate(['students']);
  }
  goToStudentAttendance(){
    this.router.navigate(['student-attendance']);
  }
  goToPaymentPage(){
    this.router.navigate(['payment']);
  }

}

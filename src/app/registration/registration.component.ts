/**
 * copyright Prisni Technologies LLP.
 * Author: Debabrata Mukherjee
 */
import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  user: User;

  constructor(private userService: UserService,
    private router: Router) { }

  ngOnInit(): void {
    this.user=new User();
  }
  save(){
    if(this.user.first_name==='' || this.user.first_name===null){
      alert("The first name can't be blank");
    }else if(this.user.last_name==='' || this.user.last_name===null){
      alert("The last name can't be blank");
    }else if(this.user.email==='' || this.user.email===null){
      alert("The email can't be blank");
    }else if(this.user.userId==='' || this.user.userId===null){
      alert("The user name cannot be blank");
    }else if(this.user.password==='' || this.user.password===null){
      alert("The password can't be empty");
    }else if(this.user.confirmPassword==='' || this.user.confirmPassword===null){
      alert("The confirm password can't be blank");
    }else if(this.user.password===this.user.confirmPassword){
    this.userService.register(this.user).subscribe (
      data => {
        console.log(data)
        this.router.navigate(['registration'])
      } )
    }else
    alert("Passwords didn't match");
  }
  goToWelcomePage(){
    this.router.navigate(['']);
  }
  reset(){
    this.user.first_name='';
    this.user.last_name='';
    this.user.email='';
    this.user.password='';
    this.user.confirmPassword='';
  }
}

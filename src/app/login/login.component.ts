import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Login } from '../login';
import { LoginService } from '../login.service';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  u: User;
  logins: Login[];
  loginStatus: String;
  constructor(private us: UserService,
    private router: Router) { }
  ngOnInit(): void {
    this.u=new User();
  }
  reset(){
    this.u.userId='';
    this.u.password='';
  }
  login(){
    if(this.u.userId!='' && this.u.userId!=null 
    && this.u.password!='' && this.u.password!=null){
      this.us.validateLogin(this.u).subscribe (
        data => {
          //this.logins= data;
          console.log(data);
          /*if(this.u!=null){
          this.router.navigate(['students']);
          }else{
            this.loginStatus='You are not authprized to login, please register yourself.';
            alert(this.loginStatus);
          }*/
        }
      )
    }else{
      alert('User name or password can not be blank');
    }
  }
  goToWelcomePage(){
    this.router.navigate(['welcome']);
  }
  signUp(){
    this.router.navigate(['secure/auth/user/add']);
  }
}

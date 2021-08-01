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
  loginObject: Login;
  logins: Login[];
  loginStatus: String;
  constructor(private us: UserService,
    private router: Router) { }
  ngOnInit(): void {
    this.loginObject=new Login();
  }
  reset(){
    this.loginObject.userId='';
    this.loginObject.password='';
  }
  login(){
    if(this.loginObject.userId!='' && this.loginObject.userId!=null 
    && this.loginObject.password!='' && this.loginObject.password!=null){
      this.us.validateLogin(this.loginObject).subscribe (
        data => {
          //this.logins= data;
          console.log(data);
          if(this.loginObject!=null){
          this.router.navigate(['students']);
          }else{
            this.loginStatus='You are not authprized to login, please register yourself.';
            alert(this.loginStatus);
          }
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

import { Component, OnInit, Input } from '@angular/core';
import {LoginService } from './../../Service/login.service';
import {Login} from  './../../Interface/login'
import { CanActivate, Router} from '@angular/router'

@Component({
  selector: 'login',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit ,CanActivate {

   _login = new Login();

  constructor( private _loginService: LoginService,
      private _router:Router ) { }

  ngOnInit() {
     this._login.username = "User Name";
     this._login.passwd = "Password";
  }

  canActivate() {
   console.log(this._loginService.IsUserValid());
    return this._loginService.IsUserValid();
    //return true;
   
 }

  onSubmit() {
   console.log(this._login.username, this._login.passwd);
   this._loginService.SetLoginFlag(true);

  }
  
  LoginAdmin1(localLogin:Login){
     //this._login = loginInfo
     console.log(this._login.username, this._login.passwd);
     this._loginService.SetLoginFlag(true);
     this._router.navigate(['/welcome']);

  }
 
  LoginAdmin(newUser: string, newPasswd:string) {

     //this.router.navigate(['/main']);
       
     if (newUser) {
         if((newUser == "admin@test.com") && ( newPasswd == "admin")){
            this._loginService.SetLoginFlag(true);
            console.log(newUser, newPasswd);
            this._router.navigate(['/welcome']);
         }

            
           //  this.router.navigate(['/view']);
         //else  
            //  this.router.navigate(['/user']);

           
        
     }

}

LoginTeacher() {

    //this.router.navigate(['/main']);
       
     if (this._login.username) {
        // if((newUser == "admin@test.com") && ( newPasswd == "admin"))
           //  this.router.navigate(['/view']);
         //else  
            //  this.router.navigate(['/user']);

         this._loginService.SetLoginFlag(true);
         //console.log(newUser, newPasswd);
         this._router.navigate(['/welcome']);
     }

} 

}

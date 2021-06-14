import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FireAuthService } from '../services/fire-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    public AuthService:FireAuthService, private Router:Router
  ) { }
  public email:string='';
  public password:string='';
  public isError:string='';
  ngOnInit(): void {}

onLogin(){
this.AuthService.loginEmailUser(this.email,this.password)
.then((res:any)=>{
  this.Router.navigate([''])
  .catch((err:any)=>this.isError="user doesn´t exist");
 // console.log(this.isError)
})

}

onLogout(){
  this.AuthService.logoutUser()
}
}

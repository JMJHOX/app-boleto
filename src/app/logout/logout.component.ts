import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FireAuthService } from '../services/fire-auth.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(private FireAuth:FireAuthService, private Router:Router) { }

  ngOnInit(): void {
    this.LogOut();
  }
  LogOut(){
    this.FireAuth.logoutUser();
    return this.Router.navigate(['']);
  }

}

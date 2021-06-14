import { Component, OnInit } from '@angular/core';
import { FireAuthService } from 'src/app/services/fire-auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private FireAuth:FireAuthService) { }
  public isLogged: boolean = false;
  ngOnInit(): void {
    this.getCurrentUser();
  }
  getCurrentUser() {
    this.FireAuth.IsAuth().subscribe(auth => {
      if (auth) {
        this.isLogged = true;}
         else {
        this.isLogged = false;
      }
    });
  }
}

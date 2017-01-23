import { Component, OnInit } from '@angular/core';
import {AuthService} from './services/auth.service';

@Component({
  selector: 'my-app',
  template:  `<main-header></main-header>
  <router-outlet></router-outlet>`,
})
export class AppComponent implements OnInit{ 
  constructor(private _authService: AuthService){

  }

    ngOnInit() {
      let storedToken:string = localStorage.getItem('auth_token');
        if(!storedToken){
          this._authService.login()
        }

    }
}

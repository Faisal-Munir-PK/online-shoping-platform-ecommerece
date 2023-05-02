import { Component } from '@angular/core';
import type { IUserLogin } from '../Interfaces';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class Login {
  user: IUserLogin = {
    email: null,
    password: null,
  };
  isDisabled: boolean = false
  
  constructor(private router: Router) {}
  
  login(): void {
    console.warn('LOGIN, route to dashboard');
    this.router.navigate(['/dashboard']);
  }
}

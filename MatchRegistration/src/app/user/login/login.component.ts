import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserSessionService } from 'src/app/services/user-session.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public isAuthenticated: boolean = false;
  public email: string = '';
  public password: string = '';

  constructor(
    private userSessionService: UserSessionService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.isAuthenticated = this.userSessionService.isRegistered();
  }

  public login(): void {
    this.userSessionService.loginUser('email', 'password');
    this.router.navigate(['/profile-user']);
  }
}

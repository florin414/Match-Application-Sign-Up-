import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class UserSessionService {
  private userInformation = [
    'profilePicture',
    'username',
    'email',
    'phoneNumber',
    'password',
  ] as const;

  constructor() {}

  public registerUser(user: User): void {
    sessionStorage.setItem('profilePicture', user.profilePicture);
    sessionStorage.setItem('username', user.username);
    sessionStorage.setItem('email', user.email);
    sessionStorage.setItem('phoneNumber', String(user.phoneNumber));
    sessionStorage.setItem('password', user.password);
    sessionStorage.setItem('registered', user.email);
  }

  public isRegistered(): boolean {
    return sessionStorage.getItem('registered') ? true : false;
  }

  public loginUser(email: string, password: string): void {
    if (
      email === sessionStorage.getItem('email') &&
      password === sessionStorage.getItem('password')
    ) {
      sessionStorage.setItem('logged', email);
    }
  }

  public logoutUser(): void {
    sessionStorage.removeItem('logged');
  }

  public isLogged(): boolean {
    return sessionStorage.getItem('logged') ? true : false;
  }

  public getUserInformation() {
    for (const userField of this.userInformation) {
      sessionStorage.getItem(userField);
    }
  }
}

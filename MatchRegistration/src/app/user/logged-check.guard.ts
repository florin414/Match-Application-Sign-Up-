import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { UserSessionService } from '../services/user-session.service';

@Injectable({
  providedIn: 'root'
})
export class LoggedCheckGuard implements CanActivate {
  constructor(private userSessionService: UserSessionService) {}

  canActivate(): boolean {
    // return this.userSessionService.isLogged();
    return true;
  }
  
}

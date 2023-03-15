import { Component, OnInit } from '@angular/core';
import { UserSessionService } from 'src/app/services/user-session.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  public isAuthenticated: boolean = false;
  public title: string = 'Match Registration Application';
  constructor(private userSessionService: UserSessionService) {}

  ngOnInit(): void {
    this.isAuthenticated = this.userSessionService.isRegistered();
  }

  public logout(): void {
    this.userSessionService.logoutUser();
  }
}

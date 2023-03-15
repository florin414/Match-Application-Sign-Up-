import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoggedCheckGuard } from './user/logged-check.guard';
import { LoginComponent } from './user/login/login.component';
import { RegisteredCheckGuard } from './user/registered-check.guard';
import { RegisterComponent } from './user/register/register.component';
import { UserProfileComponent } from './user/user-profile/user-profile.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'register',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [RegisteredCheckGuard],
  },
  {
    path: 'user-profile',
    component: UserProfileComponent,
    canActivate: [LoggedCheckGuard],
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

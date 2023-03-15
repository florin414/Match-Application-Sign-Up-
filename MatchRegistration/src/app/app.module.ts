import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './shared/material.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { UserValidationErrorsService } from './services/user-validation-errors.service';
import { UserValidatorService } from './services/user-validator.service';
import { LoginComponent } from './user/login/login.component';
import { UserProfileComponent } from './user/user-profile/user-profile.component';
import { RegisterComponent } from './user/register/register.component';
import { UserSessionService } from './services/user-session.service';

@NgModule({
  declarations: [
    NavBarComponent,
    AppComponent,
    LoginComponent,
    UserProfileComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  bootstrap: [AppComponent],
  providers: [
    UserValidationErrorsService,
    UserValidatorService,
    UserSessionService,
  ],
})
export class AppModule {}

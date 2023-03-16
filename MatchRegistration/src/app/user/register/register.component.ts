import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';

import { UserSessionService } from 'src/app/services/user-session.service';
import { UserValidatorService } from 'src/app/services/user-validator.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  private _userForm: FormGroup;
  private _user: User;

  constructor(
    private router: Router,
    private userValidatorService: UserValidatorService,
    private userSessionService: UserSessionService
  ) {}

  ngOnInit(): void {
    this._userForm = new FormGroup(this.createUser());
  }

  private createUser() {
    const user = {
      profilePicture: new FormControl('', [
        Validators.required,
        this.userValidatorService.imageUrlValidator(),
      ]),
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        this.userValidatorService.numberAndAlphabetValidator(),
      ]),
      email: new FormControl('', [
        Validators.required,
        this.userValidatorService.emailValidator(),
      ]),
      phoneNumber: new FormControl('', [
        Validators.required,
        Validators.maxLength(13),
        this.userValidatorService.phoneNumberValidator(),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
        this.userValidatorService.forbiddenPasswordValidator(),
        this.userValidatorService.createPasswordStrengthValidator(),
        this.userValidatorService.matchValidator('confirmPassword', true)
      ]),
      confirmPassword: new FormControl('', [
        Validators.required,
        this.userValidatorService.matchValidator('password')
      ]),
    };
    return user;
  }

  public get user() {
    return this._userForm;
  }


  public invalidInput(property: string): {
    [klass: string]: boolean | undefined;
  } {
    const invalidInput = {
      'is-invalid':
        (this.user.get(property)?.touched || this.user.get(property)?.dirty) &&
        !this.user.get(property)?.valid,
    };
    return invalidInput;
  }

  public register() {
    this._user = { ...this.user.value };
    this.userSessionService.registerUser(this._user);
    this.router.navigate(['/login']);
  }
}

import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { UserValidationErrorsService } from './user-validation-errors.service';
@Injectable({
  providedIn: 'root',
})
export class UserValidatorService {

  constructor(
    private userValidationErrorsService: UserValidationErrorsService
  ) {}

  public numberValidator: ValidatorFn = () => {
    return (control: AbstractControl): ValidationErrors | null => {
      return this.userValidationErrorsService.validateNumber(control.value);
    };
  }

  public numberAndAlphabetValidator: ValidatorFn = () => {
    return (control: AbstractControl): ValidationErrors | null => {
      return this.userValidationErrorsService.validateNumberAndAlphabet(
        control.value
      );
    };
  }

  public imageUrlValidator: ValidatorFn = () => {
    return (control: AbstractControl): ValidationErrors | null => {
      return this.userValidationErrorsService.validateImageUrl(
        control.value
      );
    };
  }

  public emailValidator: ValidatorFn = () => {
    return (control: AbstractControl): ValidationErrors | null => {
      return this.userValidationErrorsService.validateEmail(
        control.value
      );
    };
  }

  public createPasswordStrengthValidator: ValidatorFn = () =>  {
    return (control:AbstractControl) : ValidationErrors | null => {
      return this.userValidationErrorsService.createPasswordStrength(
        control.value
      );
    }
  }

  public forbiddenPasswordValidator: ValidatorFn = () => {
    return (control:AbstractControl) : ValidationErrors | null => {
      return this.userValidationErrorsService.forbiddenPassword(
        control.value
      );
    }
  };
}




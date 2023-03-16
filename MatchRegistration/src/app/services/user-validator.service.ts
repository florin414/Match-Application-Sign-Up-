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

  public phoneNumberValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      return this.userValidationErrorsService.validatePhoneNumber(
        control.value
      );
    };
  }

  public numberAndAlphabetValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      return this.userValidationErrorsService.validateNumberAndAlphabet(
        control.value
      );
    };
  }

  public imageUrlValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      return this.userValidationErrorsService.validateImageUrl(control.value);
    };
  }

  public emailValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      return this.userValidationErrorsService.validateEmail(control.value);
    };
  }

  public createPasswordStrengthValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      return this.userValidationErrorsService.createPasswordStrength(
        control.value
      );
    };
  }

  public forbiddenPasswordValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      return this.userValidationErrorsService.forbiddenPassword(control.value);
    };
  }

  public matchValidator(matchTo: string, reverse?: boolean): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (control.parent && reverse) {
        const c = (control.parent?.controls as any)[matchTo] as AbstractControl;
        if (c) {
          c.updateValueAndValidity();
        }
        return null;
      }
      return !!control.parent &&
        !!control.parent.value &&
        control.value === (control.parent?.controls as any)[matchTo].value
        ? null
        : { matching: true };
    };
  }
}

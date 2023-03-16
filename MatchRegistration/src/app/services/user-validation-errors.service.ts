import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class UserValidationErrorsService {
  public validatePhoneNumber(value: any): ValidationErrors | null {
    const regexPatternForNumbers: string = '^[0-9+]{1}[0-9. ]*[0-9]{1}$';

    const regex = new RegExp(regexPatternForNumbers);

    return !regex.test(value) ? { phoneNumber: true } : null;
  }

  public validateNumberAndAlphabet(value: any): ValidationErrors | null {
    const regexPatternNumbersAndAlphabets: string = '^[a-zA-Z0-9]+$';

    const regex = new RegExp(regexPatternNumbersAndAlphabets);

    return !regex.test(value) ? { numberAndAlphabet: true } : null;
  }

  public validateImageUrl(value: any): ValidationErrors | null {
    const regexPatternImageUrl =
      /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/g;

    const regex = new RegExp(regexPatternImageUrl);

    return !regex.test(value) ? { imageUrl: true } : null;
  }

  public validateEmail(value: any): ValidationErrors | null {
    const regexPatternEmail = /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi;

    const regex = new RegExp(regexPatternEmail);

    return !regex.test(value) ? { emailAddress: true } : null;
  }

  public forbiddenPassword(value: any): ValidationErrors | null {
    const mostCommonPasswords = new Set([
      'qwerty',
      'password',
      '1234',
      '12345',
      '12345678',
      '111111',
      '1234567',
      '123123',
      'qwerty123',
    ]);
    return mostCommonPasswords.has(value)
      ? { forbiddenPassword: value }
      : null;
  }

  public createPasswordStrength(value: any): ValidationErrors | null {
    const regexPatternPasswordStrength = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

    const regex = new RegExp(regexPatternPasswordStrength);

    return !regex.test(value) ? { passwordStrength: true } : null;
  }
}

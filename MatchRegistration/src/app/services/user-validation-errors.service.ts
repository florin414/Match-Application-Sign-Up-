import { Injectable } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class UserValidationErrorsService {
  /*
  - primul caracter sa fie cifra sau "+"(plus)
- ultimul caracter sa fie cifra si nimic altceva
- intre primul si ultimul caracter sa fie cifre, "."(punct), " "(spatiu)
Adica sa accepte formatele urmatoare:
+40 740 025 585
0740.025.585
0740 025 585
0740025585
   */
  public validateNumber(value: any): ValidationErrors | null {
    const regexPatternForNumbers: string = '^[0-9+]{1}[0-9. ]*[0-9]{1}$';

    const regex = new RegExp(regexPatternForNumbers);

    return !regex.test(value) ? { number: true } : null;
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
    const regexPatternEmail = /^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$/;

    const regex = new RegExp(regexPatternEmail);

    return !regex.test(value) ? { email: true } : null;
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

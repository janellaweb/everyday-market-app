import { Component } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';

function canadaOnlyValidator(control: AbstractControl): ValidationErrors | null {
  if (control.value === 'Canada') {
    return null;
  }

  return { canadaOnly: true };
}

@Component({
  selector: 'app-register-page',
  imports: [ReactiveFormsModule],
  templateUrl: './register-page.html',
  styleUrl: './register-page.css',
})
export class RegisterPage {

  registerForm = new FormGroup({
    firstName: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.pattern('^[A-Za-z ]+$')
    ]),

    lastName: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.pattern('^[A-Za-z ]+$')
    ]),

    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),

    phone: new FormControl('', [
      Validators.required,
      Validators.pattern('^[0-9]{10}$')
    ]),

    dateOfBirth: new FormControl('', [
      Validators.required
    ]),

    streetAddress: new FormControl('', [
      Validators.required,
      Validators.pattern('^[A-Za-z0-9 ]+$')
    ]),

    province: new FormControl('', [
      Validators.required
    ]),

    country: new FormControl('', [
      Validators.required,
      canadaOnlyValidator
    ]),

    terms: new FormControl(false, [
      Validators.requiredTrue
    ])
  });

}
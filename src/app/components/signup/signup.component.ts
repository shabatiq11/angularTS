import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss',
})
export class SignupComponent {
  constructor(private router: Router) {}
  email = new FormControl('', [
    Validators.required,
    Validators.email,
    //prettier-ignore
    // Validators.pattern('/^[a-z0-9][\w\.]+\@\w+?(\.\w+){1,}$/gi'),
  ]);
  password = new FormControl('', [
    Validators.required,
    Validators.minLength(6),
  ]);
  confirmPassword = new FormControl('', [
    Validators.required,
    Validators.minLength(6),
  ]);
  signupForm = new FormGroup({
    email: this.email,
    password: this.password,
    confirmPassword: this.confirmPassword,
  });

  onSubmit() {
    console.log(this.signupForm.value);
    this.router.navigate(['/']);
  }
  reset() {
    this.signupForm.reset();
  }
}

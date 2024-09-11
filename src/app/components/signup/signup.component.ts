import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss',
})
export class SignupComponent {
  constructor(private authService: AuthService) {}
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [
    Validators.required,
    Validators.minLength(6),
  ]);

  signupForm = new FormGroup({
    email: this.email,
    password: this.password,
  });

  onSubmit() {
    console.log(this.signupForm.value);
    this.authService.createUser(
      this.signupForm.value.email!,
      this.signupForm.value.password!
    );
  }
  reset() {
    this.signupForm.reset();
  }
}

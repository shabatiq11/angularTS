import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-createbin',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './createbin.component.html',
  styleUrl: './createbin.component.scss',
})
export class CreatebinComponent {
  title = new FormControl('', [Validators.required]);
  code = new FormControl('', [Validators.required]);

  createBin = new FormGroup({
    title: this.title,
    code: this.code,
  });

  onSubmit() {
    console.log(this.createBin.value);
  }

  reset() {
    this.createBin.reset();
  }
}

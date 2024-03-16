import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export class FormComponent implements OnInit {
  // signInForm = new FormGroup({
  //   username: new FormControl(''), // <== default value
  //   password: new FormControl(''), // <== default value
  //   rememberMe: new FormControl(false), // <== default value
  // });

  usernameControl: AbstractControl | undefined;

  signInForm = this.fb.group({
    username: [
      '',
      [
        Validators.required,
        Validators.minLength(6),
      ],
    ],
    password: [
      '',
      [
        Validators.required,
        Validators.minLength(6),
      ],
    ],
    rememberMe: false,
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    // const control = this.signInForm.get('username');
    // if (control !== null) {
    //   this.usernameControl = control;

    //   this.usernameControl.setErrors({
    //     required: 'Username is required.',
    //     minlength: 'Username must be at least 6 characters long.',
    //   });
    // }
  }
}

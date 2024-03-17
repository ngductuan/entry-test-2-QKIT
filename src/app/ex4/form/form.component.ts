import { Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';
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
export class FormComponent {
  // signInForm = new FormGroup({
  //   username: new FormControl(''), // <== default value
  //   password: new FormControl(''), // <== default value
  //   rememberMe: new FormControl(false), // <== default value
  // });

  // usernameControl: AbstractControl | undefined;
  usernameData: string = '';
  passwordData: string = '';

  usernameError: string = ''
  passwordError: string = ''

  signInForm = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(6)]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    rememberMe: false,
  });

  constructor(private fb: FormBuilder) {}

  usernameChange(){
    const usernameControl = this.signInForm.get('username');

    if ((usernameControl?.pristine || usernameControl?.dirty) && usernameControl?.invalid) {
      if (usernameControl?.hasError('required')) {
        this.usernameError = 'Username is required';
      }else if(usernameControl?.hasError('minlength')){
        this.usernameError = 'Min length is 6';
      }
    }else{
      this.usernameError = ''
    }
  }

  passwordChange(){
    const passwordControl = this.signInForm.get('password');
    
    if ((passwordControl?.pristine || passwordControl?.dirty) && passwordControl?.invalid) {
      if (passwordControl?.hasError('required')) {
        this.passwordError = 'Password is required';
      }else if(passwordControl?.hasError('minlength')){
        this.passwordError = 'Min length is 6';
      }
    }else{
      this.passwordError = ''
    }
  }
}

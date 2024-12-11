import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistrationService } from '../service/registeradmin.service';

@Component({
  selector: 'app-registeradmin',
  templateUrl: './register-admin.component.html',
  styleUrls: ['./register-admin.component.css']
})
export class RegisterAdminComponent{
  registerForm: FormGroup;
  submitted = false;
  PASSWORD_PATTERN = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$";
 
 
  constructor(private fb: FormBuilder, private router: Router,private registerservice :RegistrationService) {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8),Validators.pattern(this.PASSWORD_PATTERN)]],
      confirmPassword: ['', Validators.required],
    }, {
      validators: this.passwordMatchValidator
    });
  }
 
  passwordMatchValidator(form: FormGroup) {
    const password = form.get('password')?.value;
    const confirmPassword = form.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { passwordMismatch: true };
  }
 
  onSubmit() {
    this.submitted = true;
   
    if (this.registerForm.invalid) {
      return;
    }
 
    this.registerservice.createregister(this.registerForm.value).subscribe(
      (data) => {
        console.log('Registration successful', data);
        this.router.navigate(['/login']);
      },
      (error) => {
        console.error('Registration failed', error);
      }
    );
   
  }
}
 
 

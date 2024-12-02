

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
 
 
@Component({
  selector: 'app-register-admin',
  
  templateUrl: './register-admin.component.html',
  styleUrl: './register-admin.component.css'
})
 
 export class RegisterAdminComponent implements OnInit{
    registerForm: FormGroup; 
    submitted = false; 
 
    constructor(private fb: FormBuilder) {
      this.registerForm = this.fb.group(
        {
          email: ['', [Validators.required, Validators.email, Validators.maxLength(50)]],
          password: ['', [Validators.required, Validators.minLength(8)]],
          confirmPassword: ['', Validators.required],
        },
        {
          validators: this.passwordMatchValidator, 
        }
      );
    }
 
   
    ngOnInit(): void {
     
    }
 
    get f() {
      return this.registerForm.controls;
    }
 
    passwordMatchValidator(formGroup: FormGroup) {
      const password = formGroup.get('password')?.value;
      const confirmPassword = formGroup.get('confirmPassword')?.value;
 
      if (password !== confirmPassword) {
        formGroup.get('confirmPassword')?.setErrors({ passwordMismatch: true });
      } else {
        formGroup.get('confirmPassword')?.setErrors(null);
      }
    }
 
    
    onSubmit() {
      this.submitted = true; 
 
      if (this.registerForm.invalid) {
        
        return;
      }
 
    
      alert('Admin Registered Successfully!');
      console.log(this.registerForm.value);
    }
  }
 
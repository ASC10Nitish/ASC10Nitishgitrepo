

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
 
 
@Component({
  selector: 'app-register-admin',
  
  templateUrl: './register-admin.component.html',
  styleUrl: './register-admin.component.css'
})
 
 export class RegisterAdminComponent implements OnInit{
    registerForm: FormGroup; // Holds the form structure
    submitted = false; // Tracks if the form has been submitted
 
    constructor(private fb: FormBuilder) {
      this.registerForm = this.fb.group(
        {
          email: ['', [Validators.required, Validators.email, Validators.maxLength(50)]],
          password: ['', [Validators.required, Validators.minLength(8)]],
          confirmPassword: ['', Validators.required],
        },
        {
          validators: this.passwordMatchValidator, // Custom validator
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
 
    // Handles form submission
    onSubmit() {
      this.submitted = true; // Set submitted to true to show validation messages
 
      if (this.registerForm.invalid) {
        // Form is invalid, show validation errors
        return;
      }
 
      // Proceed with form submission
      alert('Admin Registered Successfully!');
      console.log(this.registerForm.value);
    }
  }
 
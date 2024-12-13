
// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent implements OnInit {
//   loginForm: FormGroup;
//   submitted = false;
//   failedAttempts = 0;
//   maxAttempts = 3;
//   timeoutDuration = 30 * 60 * 1000;
//   isLocked = false;
//   remainingAttempts = this.maxAttempts;
//   errorMessage: string = '';

//   constructor(private formBuilder: FormBuilder, private router: Router) {}

//   ngOnInit() {
//     const lockoutTime = sessionStorage.getItem('lockoutTime');
//     if (lockoutTime) {
//       const currentTime = new Date().getTime();
//       const lockoutEndTime = parseInt(lockoutTime, 10);
//       if (currentTime < lockoutEndTime) {
//         this.isLocked = true;
//         this.remainingAttempts = 0;
//       } else {
//         sessionStorage.removeItem('lockoutTime');
//       }
//     }

//     this.loginForm = this.formBuilder.group({
//       emailid: ['Subbu@gmail.com', [Validators.required, Validators.email]],
//       password: ['Peris@123', Validators.required]
//     });
//   }

//   get formControls() {
//     return this.loginForm.controls;
//   }

//   onSubmit() {
//     this.submitted = true;
//     this.errorMessage = '';

//     if (this.loginForm.invalid) {
//       return;
//     }

//     const emailid = this.loginForm.get('emailid')?.value;
//     const password = this.loginForm.get('password')?.value;

//     if (emailid === 'Subbu@gmail.com' && password === 'Peris@123') {
//       sessionStorage.setItem('loggedIn', 'yes');
//       this.router.navigate(['/application-menu']);
//     } else {
//       this.failedAttempts++;
//       this.remainingAttempts = this.maxAttempts - this.failedAttempts;
//       this.errorMessage = 'Email or password is incorrect'; 

//       if (this.failedAttempts >= this.maxAttempts) {
//         this.isLocked = true;
//         const lockoutEndTime = new Date().getTime() + this.timeoutDuration;
//         sessionStorage.setItem('lockoutTime', lockoutEndTime.toString());

//         setTimeout(() => {
//           this.isLocked = false;
//           this.failedAttempts = 0;
//           this.remainingAttempts = this.maxAttempts;
//         }, this.timeoutDuration);
//       }
//     }
//   }
// }

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistrationService } from '../service/registeradmin.service';
 
@Component({
  selector: 'app-login',
  // standalone: true,
  // imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
 
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    submitted = false;
    failedAttempts = 0;
    maxAttempts = 3;
    timeoutDuration = 30 * 60 * 1000;
    isLocked = false;
    remainingAttempts = this.maxAttempts;
    errorMessage: string = '';
   
    constructor(private formBuilder: FormBuilder, private router: Router,private registerService: RegistrationService) {}
   
    ngOnInit() {
      const lockoutTime = sessionStorage.getItem('lockoutTime');
      if (lockoutTime) {
        const currentTime = new Date().getTime();
        const lockoutEndTime = parseInt(lockoutTime, 10);
        if (currentTime < lockoutEndTime) {
          this.isLocked = true;
          this.remainingAttempts = 0;
        } else {
          sessionStorage.removeItem('lockoutTime');
        }
      }
   
      this.loginForm = this.formBuilder.group({
        emailid: ['subbu@gmail.com', [Validators.required, Validators.email]],
        password: ['Subbu@123', Validators.required]
      });
    }
   
    get formControls() {
      return this.loginForm.controls;
    }
   
    onSubmit() {
      this.submitted = true;
      this.errorMessage = '';
   
      if (this.loginForm.invalid) {
        return;
      }
   
      const emailid = this.loginForm.get('emailid')?.value;
      const password = this.loginForm.get('password')?.value;
      this.registerService.getRegister().subscribe((data)=>{
        const user = data.find((user: any)=>user.email === emailid && user.password === password);
     
   
      if (user) {
        sessionStorage.setItem('loggedIn', 'yes');
        this.router.navigate(['/application-menu']);
      } else {
        this.failedAttempts++;
        this.remainingAttempts = this.maxAttempts - this.failedAttempts;
        this.errorMessage = 'Email or password is incorrect';
   
        if (this.failedAttempts >= this.maxAttempts) {
          this.isLocked = true;
          const lockoutEndTime = new Date().getTime() + this.timeoutDuration;
          sessionStorage.setItem('lockoutTime', lockoutEndTime.toString());
   
          setTimeout(() => {
            this.isLocked = false;
            this.failedAttempts = 0;
            this.remainingAttempts = this.maxAttempts;
          }, this.timeoutDuration);
        }
      }
    }
  )
}
 
  }
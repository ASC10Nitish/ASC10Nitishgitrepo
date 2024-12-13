import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  submitted=false;
  constructor(private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit() {
    
    this.loginForm = this.formBuilder.group({
      loginid: ['Subbu', Validators.required],
      password: ['Peris', Validators.required]
    });
  }

  onSubmit() {
    this.submitted=true;
    if (this.loginForm.invalid) {
      return;
    }

    const loginid: string = this.loginForm.get('loginid')?.value;
    const password: string = this.loginForm.get('password')?.value;

    if (loginid === 'Subbu' && password === 'Peris') {
      
      sessionStorage.setItem('loggedIn', 'yes');
      this.router.navigate(['/issue-list']);
      
    } 
  }
}

import { Component } from '@angular/core';
import {FormBuilder,FormGroup} from '@angular/forms'
import {Router} from '@angular/router';
import {OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  title = 'angulardemoapp';
  loginForm: FormGroup | undefined;

  constructor(private formBuilder:FormBuilder,private router:Router){}

  ngOnit()
  { 
    this.loginForm = this.formBuilder.group({
        username:['teddy'],
        password:['']
    });
  }

}

import { Component,OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms'
import { Router } from '@angular/router';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-root',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  

 constructor(private formBuilder:FormBuilder,private router: Router){}
  ngOnInit(){
    this.loginForm=this.formBuilder.group({
      loginid:['teddy'],
      password:['teddy']
    });
  }
  onSubmit(){ 
    console.log(this.loginForm.value);
    const loginid : string =this.loginForm.get("loginid").value;
    const password : string =this.loginForm.get("password").value;

    if(loginid==="teddy" && password==="teddy")
    { 
      console.log("login success");
      sessionStorage.setItem("loggedIn","yes");
      this.router.navigate(["/employees"]);
    }
    else
    { 
      console.log("login unsuccess");
    }
    Swal.fire({
      title: "Login Successfull!",
      showConfirmButton:false,
      timer:2000,
      icon: "success"
    });
  }

}
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {
  registerForm:FormGroup;
  submitted=false;
  constructor(private formBuilder:FormBuilder,private router:Router){}
  
  ngOnInit():void{ 
    this.registerForm=this.formBuilder.group({
      adminName:['admin',[Validators.required,Validators.minLength(4),Validators.maxLength(20)]],
      password:['password',[Validators.required,Validators.minLength(8)]],
      email:['a@a.com',[Validators.required,Validators.email]]
    });
  }
 onSubmit(){
  this.submitted=true;
  if(this.registerForm.invalid){ 
    return;
  }

  console.log('Form submitted Successfully',this.registerForm.value);
  Swal.fire({
    title: "Successfully Registered",
    showConfirmButton:false,
    timer:2000,
    icon: "success"
  });
  this.router.navigate(['/Login']);
 }
  
  
}


import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 
import { FormBuilder,FormGroup,ReactiveFormsModule } from '@angular/forms';

interface FormData {
  name: string;
  password: string;
  gender: string;
  paymentMethod: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './practice-app.component.html',
  styleUrls: ['./practice-app.component.css'],
})

export class PracticeAppComponent {
  title = 'Registration Form';
  formDataList: FormData[] = [];
  name: string = '';
  password: string = '';
  gender: string = '';
  paymentMethod: string = '';
  address: string = ''; 
  date: string = '';    

  displayData(event: Event) {
    event.preventDefault();
    const newData: FormData = {
      name: this.name,
      password: this.password,
      gender: this.gender,
      paymentMethod: this.paymentMethod,
    };
    this.formDataList.push(newData);
    this.resetForm();
  }

  resetForm() {
    this.name = '';
    this.password = '';
    this.gender = '';
    this.paymentMethod = '';
    this.address = ''; 
    this.date = '';    
  }

  refreshTable() {
    this.formDataList = [];
  }



} 
/*
  import { Component } from '@angular/core';
  import { CommonModule } from '@angular/common';
  import { FormBuilder,FormGroup,ReactiveFormsModule } from '@angular/forms';
  import { EmployeeService } from '../service/employee-service';
   
  @Component({
    selector: 'app-practice-app',
    standalone: true,
    imports: [CommonModule,ReactiveFormsModule],
    templateUrl: './practice-app.component.html',
    styleUrls: ['./practice-app.component.css'],
  })
   
   
  export class PracticeAppComponent {
    addForm:FormGroup;
    constructor(private formBuilder: FormBuilder,private employeeService:EmployeeService){
      this.addForm=this.formBuilder.group({
       id:[],
       name:[],
       salary:[]
      });
    }
  }
   
  */
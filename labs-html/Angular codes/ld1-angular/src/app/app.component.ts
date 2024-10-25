

import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {Component,OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Employee} from './model/employee.model';
import { EmployeeService } from './service/employee-service';


@Component({ 
  selector:'app-root',
  standalone:true,
  templateUrl:'./app.component.html',
  styleUrls:['./app.component.css'],
  imports: [CommonModule, FormsModule, RouterOutlet] 
})

export class AppComponent implements OnInit
{ 
  title='ld1-amgular';
  employees?:Employee[];
  constructor(private employeeService:EmployeeService){}
  
  ngOnInit(): void {
    console.log("asynchronously retrieving data from the server");
    this.employeeService.getEmployee().subscribe(data=>this.employees=data)
  }
}
import { Component,OnInit } from '@angular/core';
import {Employee} from '../model/employee.model';
import { EmployeeService } from '../service/employee.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component
({
  selector: 'app-list-emp',
  //standalone: true,
  //imports: [],
  templateUrl: './list-emp.component.html',
  styleUrl: './list-emp.component.css'
})

export class ListEmpComponent implements OnInit 
{
  employees:Employee[];
  employeeService:EmployeeService;
  searchInput:any;
  searchEmp:Employee[];

  constructor(employeeService:EmployeeService,private router:Router)
  {
    this.employeeService=employeeService;
  }
  
  ngOnInit():void
  {
    this.employeeService.getEmployees().subscribe((employeeData)=>{this.employees=employeeData});
  }

  deleteEmployee(toDeleteEmployee: Employee): void
  {
    if (toDeleteEmployee.id !== undefined)
    {
      this.employeeService.deleteEmployee(toDeleteEmployee.id).subscribe(() =>
      {
      this.employees = this.employees.filter(employee => employee.id !== toDeleteEmployee.id);
      });
    }
  }
  
  
  updateEmployee(employeeId:number|undefined):void
  { 
    if(employeeId!==undefined)
    { 
      this.router.navigate(['update',employeeId])
    }
    else
    { 
      console.log("Employee id is undefined")
    }
  }

  searchEmployee() {
    this.employeeService.getEmployees().subscribe((data) => {
      this.searchEmp = data.filter(employee => employee.id == this.searchInput);
  
      if (this.searchEmp.length > 0) 
      {
        
        Swal.fire({
          title: 'Employee Found!',
          text: `Employee Name: ${this.searchEmp[0].name},
          Employee Salary: ${this.searchEmp[0].salary},`,
          icon: 'success',
          confirmButtonText: 'Ok'
        });
      } else
      {
        
        Swal.fire({
          title: 'Employee Not Found!',
          text: 'Please check the ID and try again.',
          icon: 'error',
          confirmButtonText: 'Try Again'
        });
      }
    });
  }

  logout()
  { 
    sessionStorage.getItem('loggedIn')=='no';
    this.router.navigate(["/"]);
  }
  
}


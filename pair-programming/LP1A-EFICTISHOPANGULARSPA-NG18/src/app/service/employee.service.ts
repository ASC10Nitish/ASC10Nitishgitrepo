
// connect to an external API to get the list of employees
import { HttpClient } from "@angular/common/http";
import { Injectable} from "@angular/core";
import {observable} from 'rxjs';
import { Employee } from "../model/employee.model";

@Injectable(
{ 
    providedIn:'root'
}
)
export class EmployeeService
{
  [x: string]: any;   baseUrl:string="http://localhost:3000/employee";
    constructor(private httpClient:HttpClient){}

    getEmployees()
    { 
        return this.httpClient.get<Employee[]>(this.baseUrl);
    }

    getEmployeeById(id:number)
    { 
        return this.httpClient.get<Employee>(this.baseUrl+"/"+id);
    }

    createEmployee(employee:Employee)
    { 
        return this.httpClient.post(this.baseUrl,employee);
    }

    updateEmployee(id:number,employee:any)
    { 
        return this.httpClient.put(this.baseUrl+"/"+id,employee);
    }
    
    deleteEmployee(id: number){
        return this.httpClient.delete<void>(`${this.baseUrl}/${id}`);
      }

}
     
// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';
// import { RegisterAdmin } from '../model/registeradmin.model'; 

// @Injectable({
//   providedIn: 'root'
// })
// export class RegisterAdminService {
//   addPatient(newRegisterAdmin: RegisterAdmin) {
//     throw new Error('Method not implemented.');
//   }
//   private baseUrl: string =  'http://localhost:8080/api/v5/registeradmin';

//   constructor(private httpClient: HttpClient) {}

 
//   getPatients(): Observable<RegisterAdmin[]> {
//     return this.httpClient.get<RegisterAdmin[]>(this.baseUrl);
//   }

//   getPatientById(id: number): Observable<RegisterAdmin> {
//     return this.httpClient.get<RegisterAdmin>(`${this.baseUrl}/${id}`);
//   }

//   // Create a new patient
//   createPatient(registerAdmin: RegisterAdmin): Observable<RegisterAdmin> {
//     return this.httpClient.post<RegisterAdmin>(this.baseUrl, RegisterAdmin);
//   }

 
// }

import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Register } from "../model/registeradmin.model";
 
 
@Injectable({
    providedIn:"root"
})
export class RegistrationService{
    baseUrl:string="http://localhost:8080/api/v5/register";
    constructor( private httpclient:HttpClient){
 
    }
   
 
    getRegister(){
        return this.httpclient.get<Register[]>(this.baseUrl)
    }
 
    getregisterById(id:number){
        return this.httpclient.get<Register>(this.baseUrl+'/'+id)
    }
 
    createregister(register:Register){
        return this.httpclient.post(this.baseUrl,register)
    }
 
    updateregister(id:number,register:any){
        return this.httpclient.put(this.baseUrl+'/'+id,register)
    }
 
    deleteregister(id:number){
        return this.httpclient.delete(this.baseUrl+'/'+id)
    }
   
}
 

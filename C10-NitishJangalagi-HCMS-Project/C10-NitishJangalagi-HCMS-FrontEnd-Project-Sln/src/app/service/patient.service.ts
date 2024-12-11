import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient } from '../model/patients.model'; // You should define this model

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  private baseUrl: string =  'http://localhost:8080/api/v4/patients';// Replace with your backend URL

  constructor(private httpClient: HttpClient) {}

  // Get all patients
  getPatients(): Observable<Patient[]> {
    return this.httpClient.get<Patient[]>(this.baseUrl);
  }

  // Get a patient by ID
  getPatientById(id: number): Observable<Patient> {
    return this.httpClient.get<Patient>(`${this.baseUrl}/${id}`);
  }

  // Create a new patient
  createPatient(patient: Patient): Observable<Patient> {
    return this.httpClient.post<Patient>(this.baseUrl, patient);
  }

  // Update an existing patient
  updatePatient(id: number, patient: Patient): Observable<Patient> {
    return this.httpClient.put<Patient>(`${this.baseUrl}/${id}`, patient);
  }

  // Delete a patient
  deletePatient(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.baseUrl}/${id}`);
  }
}

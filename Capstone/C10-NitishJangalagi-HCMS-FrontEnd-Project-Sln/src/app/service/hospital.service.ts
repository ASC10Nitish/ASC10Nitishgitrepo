import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hospital } from '../model/hospitals.model'; // You should define this model

@Injectable({
  providedIn: 'root'
})
export class HospitalService {
  private baseUrl: string = 'http://localhost:8080/api/v3/hospital';  // Replace with your backend URL

  constructor(private httpClient: HttpClient) {}

  // Get all hospitals
  getHospitals(): Observable<Hospital[]> {
    return this.httpClient.get<Hospital[]>(this.baseUrl);
  }

  // Get a hospital by ID
  getHospitalById(id: number): Observable<Hospital> {
    return this.httpClient.get<Hospital>(`${this.baseUrl}/${id}`);
  }

  // Create a new hospital
  createHospital(hospital: Hospital): Observable<Hospital> {
    return this.httpClient.post<Hospital>(this.baseUrl, hospital);
  }

  // Update an existing hospital
  updateHospital(id: number, hospital: Hospital): Observable<Hospital> {
    return this.httpClient.put<Hospital>(`${this.baseUrl}/${id}`, hospital);
  }

  // Delete a hospital
  deleteHospital(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.baseUrl}/${id}`);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Doctor } from '../model/doctors.model'; // You should define this model

@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  private baseUrl: string = 'http://localhost:3000/doctors'; // Replace with your backend URL

  constructor(private httpClient: HttpClient) {}

  // Get all doctors
  getDoctors(): Observable<Doctor[]> {
    return this.httpClient.get<Doctor[]>(this.baseUrl);
  }

  // Get a doctor by ID
  getDoctorById(id: string): Observable<Doctor> {
    return this.httpClient.get<Doctor>(`${this.baseUrl}/${id}`);
  }

  // Create a new doctor
  createDoctor(doctor: Doctor): Observable<Doctor> {
    return this.httpClient.post<Doctor>(this.baseUrl, doctor);
  }

  // Update an existing doctor
  updateDoctor(id: string, doctor: Doctor): Observable<Doctor> {
    return this.httpClient.put<Doctor>(`${this.baseUrl}/${id}`, doctor);
  }

  // Delete a doctor
  deleteDoctor(id: string): Observable<void> {
    return this.httpClient.delete<void>(`${this.baseUrl}/${id}`);
  }
}

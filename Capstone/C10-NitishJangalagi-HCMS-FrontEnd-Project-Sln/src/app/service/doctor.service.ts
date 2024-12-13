
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Doctor } from '../model/doctors.model';
import { catchError, map, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  private baseUrl: string = 'http://localhost:8080/api/v1/doctor'; 

  constructor(private httpClient: HttpClient) {}

  // Get all doctors
  getDoctors(): Observable<Doctor[]> {
    return this.httpClient.get<Doctor[]>(this.baseUrl);
  }

  // Get a doctor by ID
  getDoctorById(id: number): Observable<Doctor> {
    return this.httpClient.get<Doctor>(`${this.baseUrl}/${id}`);
  }

  // Create a new doctor with a generated doctorId
  createDoctor(doctor: Doctor): Observable<Doctor> {
    return this.getDoctors().pipe(
      map((doctors: Doctor[]) => {
        doctor.doctorId = this.generateDoctorId(doctors);  // Assign generated ID
        return doctor;
      }),
      catchError((error) => {
        console.error('Error fetching doctors for ID generation:', error);
        return of(null);  // Return a fallback if an error occurs
      }),
      switchMap((doctor: Doctor) => {
        if (doctor) {
          return this.httpClient.post<Doctor>(this.baseUrl, doctor);
        } else {
          throw new Error('Failed to generate doctor ID');
        }
      })
    );
  }

  // Update an existing doctor
  updateDoctor(id: number, doctor: Doctor): Observable<Doctor> {
    return this.httpClient.put<Doctor>(`${this.baseUrl}/${id}`, doctor);
  }

  // Delete a doctor by ID
  deleteDoctor(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.baseUrl}/${id}`);
  }

  // Generate the next available doctorId
   generateDoctorId(doctors: Doctor[]): string {
    let nextId = 1;
    const lastDoctor = doctors[doctors.length - 1];

    if (lastDoctor) {
      const lastDoctorId = lastDoctor.doctorId;
      const match = lastDoctorId.match(/^P(\d+)$/); // Assuming ID format like P001, P002...
      if (match) {
        nextId = parseInt(match[1], 10) + 1;  // Increment the ID
      }
    }

    return `P${nextId.toString().padStart(3, '0')}`;  // Format the doctor ID
  }
}

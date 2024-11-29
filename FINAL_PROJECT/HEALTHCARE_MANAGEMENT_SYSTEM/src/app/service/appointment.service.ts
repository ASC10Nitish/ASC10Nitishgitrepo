import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Appointment } from '../model/appointments.model'; // You should define this model

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  private baseUrl: string = 'http://localhost:3000/appointments'; // Replace with your backend URL

  constructor(private httpClient: HttpClient) {}

  // Get all appointments
  getAppointments(): Observable<Appointment[]> {
    return this.httpClient.get<Appointment[]>(this.baseUrl);
  }

  // Get an appointment by ID
  getAppointmentById(id: string): Observable<Appointment> {
    return this.httpClient.get<Appointment>(`${this.baseUrl}/${id}`);
  }

  // Create a new appointment
  createAppointment(appointment: Appointment): Observable<Appointment> {
    return this.httpClient.post<Appointment>(this.baseUrl, appointment);
  }

  // Update an existing appointment
  updateAppointment(id: string, appointment: Appointment): Observable<Appointment> {
    return this.httpClient.put<Appointment>(`${this.baseUrl}/${id}`, appointment);
  }

  // Delete an appointment
  deleteAppointment(id: string): Observable<void> {
    return this.httpClient.delete<void>(`${this.baseUrl}/${id}`);
  }
}

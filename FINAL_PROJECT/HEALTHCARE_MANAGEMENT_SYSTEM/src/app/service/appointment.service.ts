import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Appointment } from '../model/appointments.model'; 

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  private baseUrl: string = 'http://localhost:3000/appointments'; 

  constructor(private httpClient: HttpClient) {}

  
  getAppointments(): Observable<Appointment[]> {
    return this.httpClient.get<Appointment[]>(this.baseUrl);
  }


  getAppointmentById(id: string): Observable<Appointment> {
    return this.httpClient.get<Appointment>(`${this.baseUrl}/${id}`);
  }

  
  createAppointment(appointment: Appointment): Observable<Appointment> {
    return this.httpClient.post<Appointment>(this.baseUrl, appointment);
  }

  
  updateAppointment(id: string, appointment: Appointment): Observable<Appointment> {
    return this.httpClient.put<Appointment>(`${this.baseUrl}/${id}`, appointment);
  }

  
  deleteAppointment(id: string): Observable<void> {
    return this.httpClient.delete<void>(`${this.baseUrl}/${id}`);
  }
}

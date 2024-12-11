// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';
// import { Appointment } from '../model/appointments.model'; 

// @Injectable({
//   providedIn: 'root'
// })
// export class AppointmentService {
//   private baseUrl: string = 'http://localhost:8080/api/v2/appointment'; 

//   constructor(private httpClient: HttpClient) {}

  
//   getAppointments(): Observable<Appointment[]> {
//     return this.httpClient.get<Appointment[]>(this.baseUrl);
//   }


//   getAppointmentById(id: number): Observable<Appointment> {
//     return this.httpClient.get<Appointment>(`${this.baseUrl}/${id}`);
//   }

  
//   createAppointment(appointment: Appointment): Observable<Appointment> {
//     return this.httpClient.post<Appointment>(this.baseUrl, appointment);
//   }

  
//   updateAppointment(id:number, appointment: Appointment): Observable<Appointment> {
//     return this.httpClient.put<Appointment>(`${this.baseUrl}/${id}`, appointment);
//   }

  
//   deleteAppointment(id: number): Observable<void> {
//     return this.httpClient.delete<void>(`${this.baseUrl}/${id}`);
//   }
// }


import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Appointment } from '../model/appointments.model'; 
import { catchError, map, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  private baseUrl: string = 'http://localhost:8080/api/v2/appointment'; 

  constructor(private httpClient: HttpClient) {}

  // Get all appointments
  getAppointments(): Observable<Appointment[]> {
    return this.httpClient.get<Appointment[]>(this.baseUrl);
  }

  // Get an appointment by ID
  getAppointmentById(id: number): Observable<Appointment> {
    return this.httpClient.get<Appointment>(`${this.baseUrl}/${id}`);
  }

  // Create a new appointment with a generated appointmentId
  createAppointment(appointment: Appointment): Observable<Appointment> {
    return this.getAppointments().pipe(
      map((appointments: Appointment[]) => {
        appointment.appointmentId = this.generateAppointmentId(appointments);  // Generate and assign the ID
        return appointment;
      }),
      catchError((error) => {
        console.error('Error fetching appointments for ID generation:', error);
        return of(null);  // Fallback if there is an error
      }),
      switchMap((appointment: Appointment) => {
        if (appointment) {
          return this.httpClient.post<Appointment>(this.baseUrl, appointment);  // Send appointment data to backend
        } else {
          throw new Error('Failed to generate appointment ID');
        }
      })
    );
  }

  // Update an existing appointment
  updateAppointment(id: number, appointment: Appointment): Observable<Appointment> {
    return this.httpClient.put<Appointment>(`${this.baseUrl}/${id}`, appointment);
  }

  // Delete an appointment by ID
  deleteAppointment(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.baseUrl}/${id}`);
  }

  // Generate the next available appointmentId
  generateAppointmentId(appointments: Appointment[]): string {
    let nextId = 1;
    const lastAppointment = appointments[appointments.length - 1];

    if (lastAppointment) {
      const lastAppointmentId = lastAppointment.appointmentId;
      const match = lastAppointmentId.match(/^A(\d+)$/);  // Assuming ID format like A001, A002...
      if (match) {
        nextId = parseInt(match[1], 10) + 1;  // Increment the ID
      }
    }

    return `A${nextId.toString().padStart(3, '0')}`;  // Format the appointment ID
  }
}

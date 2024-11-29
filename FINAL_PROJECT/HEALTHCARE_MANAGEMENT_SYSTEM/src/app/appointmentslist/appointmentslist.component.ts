// appointments.component.ts
import { Component, OnInit } from '@angular/core';
import { AppointmentService } from '../service/appointment.service';
import { Appointment } from '../model/appointments.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointmentslist.component.html',
  styleUrls: ['./appointmentslist.component.css']
})
export class AppointmentsComponent implements OnInit {
  appointments: Appointment[] = [];
  searchInput: any;
  searchAppointment: Appointment[] = [];

  constructor(private appointmentService: AppointmentService, private router: Router) { }

  ngOnInit(): void {
    this.appointmentService.getAppointments().subscribe((appointmentData) => {
      this.appointments = appointmentData;
    });
  }

  deleteAppointment(toDeleteAppointment: Appointment): void {
    if (toDeleteAppointment.appointment_id !== undefined) {
      this.appointmentService.deleteAppointment(toDeleteAppointment.appointment_id).subscribe(() => {
        this.appointments = this.appointments.filter(appointment => appointment.appointment_id !== toDeleteAppointment.appointment_id);
      });
    }
  }

  addAppointment() {
    this.router.navigate(['/add-appointment']);
  }

  updateAppointment(appointmentId: string | undefined): void {
    if (appointmentId !== undefined) {
      this.router.navigate(['update-appointment', appointmentId]);
    } else {
      console.log('Appointment id is undefined');
    }
  }

  searchAppointments() {
    this.appointmentService.getAppointments().subscribe((data) => {
      this.searchAppointment = data.filter(appointment => appointment.appointment_id === this.searchInput);
      if (this.searchAppointment.length > 0) {
        alert('Appointment Found!');
      } else {
        alert('Appointment Not Found!');
      }
    });
  }

  logout() {
    sessionStorage.setItem('loggedIn', 'no');
    this.router.navigate(['/login']);
  }
}

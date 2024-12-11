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
  searchInput: string='';
  searchAppointment: Appointment[] = [];

  constructor(private appointmentService: AppointmentService, private router: Router) { }

  ngOnInit(): void {
    this.appointmentService.getAppointments().subscribe((appointmentData) => {
      this.appointments = appointmentData;
    });
  }


  deleteAppointment(id: number): void {
    if (id !== undefined) {
      this.appointmentService.deleteAppointment(id).subscribe(() => {
        this.appointments = this.appointments.filter(appointment => appointment.id !== id);
      });
    }
  }

  
  addAppointment() {
    this.router.navigate(['/add-appointment']);
  }

  
  back() { 
    this.router.navigate(['/application-menu']);
  }

  
  updateAppointment(id: number): void {
    if (id !== undefined) {
      this.router.navigate(['update-appointment', id]);
    } else {
      console.log('Appointment id is undefined');
    }
  }

 
  searchAppointments() {
    if (!this.searchInput) {
      this.appointmentService.getAppointments().subscribe((appointmentData) => {
        this.appointments = appointmentData;
      });
      return;
    }

    const searchId = Number(this.searchInput);

    this.appointmentService.getAppointments().subscribe((data) => {
      this.searchAppointment = data.filter(appointment =>appointment.appointmentId.toString().includes(this.searchInput));

      if (this.searchAppointment.length > 0) {
        
        this.appointments = this.searchAppointment;
      } else {
        
        alert('Appointment Not Found!');
        this.appointments = [];
      }
    });
  }

  
  logout() {
    sessionStorage.setItem('loggedIn', 'no');
    this.router.navigate(['/login']);
  }
}

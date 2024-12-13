



import { Component, OnInit } from '@angular/core';
import { Appointment } from '../model/appointments.model';
import { AppointmentService } from '../service/appointment.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-appointmnet',
  templateUrl: './update-appointment.component.html',
  styleUrls: ['./update-appointment.component.css']
})
export class UpdateAppointmentComponent implements OnInit {
  id: number = 0;  // Now using number for ID
  appointment: Appointment = new Appointment();
  successMessage: string = '';
  errorMessage: string = '';
  

  constructor(
    private appointmentService: AppointmentService,
    private route: ActivatedRoute,
    private router: Router,
    
  ) { }

  ngOnInit(): void {

  



    this.id = this.route.snapshot.params['id'];  // Get id from route params
    
    // Fetch doctor data by id
    this.appointmentService.getAppointmentById(this.id).subscribe(
      (appointmentData) => {
        this.appointment = appointmentData;
      },
      (error) => {
        console.log(error);
        this.errorMessage = 'Failed to load doctor details.';
      }
    );
  }

  back()
  {
    this.router.navigate(['appointments'])
  }

  // Method to update doctor details
  updateAppointment(): void {
    this.appointmentService.updateAppointment(this.id, this.appointment).subscribe(
      (updatedAppointment) => {
        console.log('Updated appointment:', updatedAppointment);
        this.successMessage = 'Appointment details updated successfully!';
        this.errorMessage = '';  // Clear any previous error message

        setTimeout(() => {
          this.router.navigate(['/appointments']);  // Redirect to the doctors list after update
        }, 2000);
      },
      (error) => {
        console.log('Error updating appointment:', error);
        this.errorMessage = 'Something went wrong while updating the appointment details!';
        this.successMessage = '';  // Clear any previous success message
      }
    );
  }

  // Submit the form
  onSubmit(): void {
    this.updateAppointment();
  }
}

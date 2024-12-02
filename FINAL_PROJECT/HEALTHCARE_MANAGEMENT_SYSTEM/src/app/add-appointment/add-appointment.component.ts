import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppointmentService } from '../service/appointment.service';

@Component({
  selector: 'app-add-appointment',
  templateUrl: './add-appointment.component.html',
  styleUrls: ['./add-appointment.component.css']
})
export class AddAppointmentComponent implements OnInit {
  addAppointmentForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private appointmentService: AppointmentService
  ) { }

  ngOnInit(): void {
    this.addAppointmentForm = this.formBuilder.group({
      appointment_id: ['', Validators.required],
      doctor_name: ['', Validators.required],
      patient_name: ['', Validators.required],
      appointment_date: ['', Validators.required],
      time: ['', Validators.required],
      reason: ['', Validators.required]
    });
  }
back()
{ 
  this.router.navigate(['/appointments']);
}
  onSubmit(): void {
    if (this.addAppointmentForm.valid) {
      this.appointmentService.createAppointment(this.addAppointmentForm.value).subscribe(
        data => {
          this.router.navigate(['/appointment-list']);
        },
        error => {
          console.error('Error: ', error.message);
        }
      );
    } else {
      // Mark all fields as touched to trigger validation error messages
      this.addAppointmentForm.markAllAsTouched();
    }
  }
}

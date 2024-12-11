// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { Router } from '@angular/router';
// import { AppointmentService } from '../service/appointment.service';

// @Component({
//   selector: 'app-add-appointment',
//   templateUrl: './add-appointment.component.html',
//   styleUrls: ['./add-appointment.component.css']
// })
// export class AddAppointmentComponent implements OnInit {
//   addAppointmentForm: FormGroup;

//   constructor(
//     private formBuilder: FormBuilder,
//     private router: Router,
//     private appointmentService: AppointmentService
//   ) { }

//   ngOnInit(): void {
//     this.addAppointmentForm = this.formBuilder.group({
//       appointmentId: ['', Validators.required],
//       doctorName: ['', Validators.required],
//       patientName: ['', Validators.required],
//       appointmentDate: ['', Validators.required],
//       time: ['', Validators.required],
//       reason: ['', Validators.required]
//     });
//   }
// back()
// { 
//   this.router.navigate(['/appointments']);
// }
//   onSubmit(): void {
//     if (this.addAppointmentForm.valid) {
//       this.appointmentService.createAppointment(this.addAppointmentForm.value).subscribe(
//         data => {
//           this.router.navigate(['/appointments']);
//         },
//         error => {
//           console.error('Error: ', error.message);
//         }
//       );
//     } else {
      
//       this.addAppointmentForm.markAllAsTouched();
//     }
//   }
// }

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppointmentService } from '../service/appointment.service';
import { Appointment } from '../model/appointments.model';  // Assuming you have an Appointment model

@Component({
  selector: 'app-add-appointment',
  templateUrl: './add-appointment.component.html',
  styleUrls: ['./add-appointment.component.css']
})
export class AddAppointmentComponent implements OnInit {
  addAppointmentForm: FormGroup;
  appointmentId: string = ''; // To store the generated appointment ID
  

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private appointmentService: AppointmentService
  ) { }

  ngOnInit(): void {
    
    
    this.addAppointmentForm = this.formBuilder.group({
      appointmentId: [{ value: '', disabled: true }],  
      doctorName: ['', Validators.required],
      patientName: ['', Validators.required],
      appointmentDate: ['', Validators.required],
      time: ['', Validators.required],
      reason: ['', Validators.required]
    });

    // Generate the appointmentId when the component initializes
    this.generateAppointmentId();
  }

  // Method to generate appointmentId
  generateAppointmentId(): void {
    // Call the service to generate an appointmentId
    this.appointmentService.getAppointments().subscribe(appointments => {
      const appointmentId = this.appointmentService.generateAppointmentId(appointments);  // Using the method from the service
      this.appointmentId = appointmentId;
      // Set the generated appointmentId to the form control
      this.addAppointmentForm.patchValue({ appointmentId: this.appointmentId });
    });
  }

  // Method to navigate back to the appointment list page
  back() {
    this.router.navigate(['/appointments']);
  }

  // Method to handle form submission
  onSubmit(): void {
    if (this.addAppointmentForm.valid) {
      const appointmentData: Appointment = this.addAppointmentForm.value;
      this.appointmentService.createAppointment(appointmentData).subscribe(
        data => {
          this.router.navigate(['/appointments']);  // Navigate to appointments list after creation
        },
        error => {
          console.error('Error: ', error.message);  // Display error message if something goes wrong
        }
      );
    } else {
      this.addAppointmentForm.markAllAsTouched();  // Mark all controls as touched to show validation errors
    }
  }
}


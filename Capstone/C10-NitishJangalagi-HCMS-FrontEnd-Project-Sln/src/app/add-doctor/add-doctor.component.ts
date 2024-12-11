


import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DoctorService } from '../service/doctor.service';
import { Doctor } from '../model/doctors.model';  // Assuming your model is called Doctor

@Component({
  selector: 'app-add-doctor',
  templateUrl: './add-doctor.component.html',
  styleUrls: ['./add-doctor.component.css']
})
export class AddDoctorComponent implements OnInit {
  addDoctorForm: FormGroup;
  doctorId: string = ''; // To store the generated doctor ID

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private doctorService: DoctorService
  ) { }

  ngOnInit(): void {
    // Initialize form with form controls
    this.addDoctorForm = this.formBuilder.group({
      doctorId: [{ value: '', disabled: true }],  // This will hold the generated doctorId
      name: ['', Validators.required],
      speciality: ['', Validators.required],
      experience: ['', [Validators.required, Validators.min(0)]],
      contactNumber: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });

    // Generate the doctorId when the component initializes
    this.generateDoctorId();
  }

  // Method to generate doctorId
  generateDoctorId(): void {
    // Call the service to generate a doctorId
    this.doctorService.getDoctors().subscribe(doctors => {
      const doctorId = this.doctorService.generateDoctorId(doctors);  // Using the method from the service
      this.doctorId = doctorId;
      // Set the generated doctorId to the form control
      this.addDoctorForm.patchValue({ doctorId: this.doctorId });
    });
  }

  // Method to navigate back to the doctor list page
  back() {
    this.router.navigate(['/doctors']);
  }

  // Method to handle form submission
  onSubmit(): void {
    if (this.addDoctorForm.valid) {
      const doctorData: Doctor = this.addDoctorForm.value;
      this.doctorService.createDoctor(doctorData).subscribe(
        data => {
          this.router.navigate(['/doctors']);  // Navigate to doctors list after creation
        },
        error => {
          alert('Error: ' + error.message);  // Display error message if something goes wrong
        }
      );
    } else {
      this.addDoctorForm.markAllAsTouched();  // Mark all controls as touched to show validation errors
    }
  }
}

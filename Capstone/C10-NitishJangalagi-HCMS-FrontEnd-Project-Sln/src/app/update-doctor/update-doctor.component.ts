

import { Component, OnInit } from '@angular/core';
import { Doctor } from '../model/doctors.model';
import { DoctorService } from '../service/doctor.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-doctor',
  templateUrl: './update-doctor.component.html',
  styleUrls: ['./update-doctor.component.css']
})
export class UpdateDoctorComponent implements OnInit {
  id: number = 0;  // Now using number for ID
  doctor: Doctor = new Doctor();
  successMessage: string = '';
  errorMessage: string = '';

  constructor(
    private doctorService: DoctorService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];  // Get id from route params

    // Fetch doctor data by id
    this.doctorService.getDoctorById(this.id).subscribe(
      (doctorData) => {
        this.doctor = doctorData;
      },
      (error) => {
        console.log(error);
        this.errorMessage = 'Failed to load doctor details.';
      }
    );
  }

  back()
  {
    this.router.navigate(['doctors'])
  }

  // Method to update doctor details
  updateDoctor(): void {
    this.doctorService.updateDoctor(this.id, this.doctor).subscribe(
      (updatedDoctor) => {
        console.log('Updated doctor:', updatedDoctor);
        this.successMessage = 'Doctor details updated successfully!';
        this.errorMessage = '';  // Clear any previous error message

        setTimeout(() => {
          this.router.navigate(['/doctors']);  // Redirect to the doctors list after update
        }, 2000);
      },
      (error) => {
        console.log('Error updating doctor:', error);
        this.errorMessage = 'Something went wrong while updating the doctor details!';
        this.successMessage = '';  // Clear any previous success message
      }
    );
  }

  // Submit the form
  onSubmit(): void {
    this.updateDoctor();
  }
}

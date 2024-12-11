// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-update-hospital',
//   // standalone: true,
//   // imports: [],
//   templateUrl: './update-hospital.component.html',
//   styleUrl: './update-hospital.component.css'
// })
// export class UpdateHospitalComponent {

// }


import { Component, OnInit } from '@angular/core';
import { Hospital } from '../model/hospitals.model';  // Ensure to create the Hospital model
import { HospitalService } from '../service/hospital.service';  // Ensure to create the Hospital service
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-hospital',
  templateUrl: './update-hospital.component.html',
  styleUrls: ['./update-hospital.component.css']
})
export class UpdateHospitalComponent implements OnInit {
  id: number = 0;  // Using number for ID
  hospital: Hospital = new Hospital();  // Create an empty hospital object
  successMessage: string = '';
  errorMessage: string = '';

  constructor(
    private hospitalService: HospitalService,  // Service for interacting with API
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];  // Get hospital ID from the URL parameters

    // Fetch hospital data by ID
    this.hospitalService.getHospitalById(this.id).subscribe(
      (hospitalData) => {
        this.hospital = hospitalData;  // Set the fetched hospital data to the local variable
      },
      (error) => {
        console.log(error);
        this.errorMessage = 'Failed to load hospital details.';
      }
    );
  }

  back() {
    this.router.navigate(['hospitals']);  // Navigate back to the hospitals list
  }

  // Method to update hospital details
  updateHospital(): void {
    this.hospitalService.updateHospital(this.id, this.hospital).subscribe(
      (updatedHospital) => {
        console.log('Updated hospital:', updatedHospital);
        this.successMessage = 'Hospital details updated successfully!';
        this.errorMessage = '';  // Clear any previous error message

        setTimeout(() => {
          this.router.navigate(['/hospitals']);  // Redirect to hospitals list after successful update
        }, 2000);
      },
      (error) => {
        console.log('Error updating hospital:', error);
        this.errorMessage = 'Something went wrong while updating the hospital details!';
        this.successMessage = '';  // Clear any previous success message
      }
    );
  }

  // Submit the form
  onSubmit(): void {
    this.updateHospital();
  }
}

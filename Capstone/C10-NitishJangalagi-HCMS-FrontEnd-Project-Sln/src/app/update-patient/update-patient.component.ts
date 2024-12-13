import { Component, OnInit } from '@angular/core';
import { Patient } from '../model/patients.model';  // Assuming you have the patient model
import { PatientService } from '../service/patient.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-patient',
  templateUrl: './update-patient.component.html',
  styleUrls: ['./update-patient.component.css']
})
export class UpdatePatientComponent implements OnInit {
  id: number = 0;  // ID type is integer
  patient: Patient = new Patient();
  successMessage: string = '';
  errorMessage: string = '';

  constructor(
    private patientService: PatientService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];  // Fetch ID from the route params

    // Fetch patient data by ID
    this.patientService.getPatientById(this.id).subscribe(
      (patientData) => {
        this.patient = patientData;
      },
      (error) => {
        console.log(error);
        this.errorMessage = 'Failed to load patient details.';
      }
    );
  }

  back(): void {
    this.router.navigate(['patients']);  // Navigate back to patient list
  }

  // Method to update patient details
  updatePatient(): void {
    this.patientService.updatePatient(this.id, this.patient).subscribe(
      (updatedPatient) => {
        console.log('Updated patient:', updatedPatient);
        this.successMessage = 'Patient details updated successfully!';
        this.errorMessage = '';  // Clear any previous error message

        setTimeout(() => {
          this.router.navigate(['/patients']);  // Redirect to patient list after update
        }, 2000);
      },
      (error) => {
        console.log('Error updating patient:', error);
        this.errorMessage = 'Something went wrong while updating the patient details!';
        this.successMessage = '';  // Clear any previous success message
      }
    );
  }

  // Submit the form
  onSubmit(): void {
    this.updatePatient();
  }
}

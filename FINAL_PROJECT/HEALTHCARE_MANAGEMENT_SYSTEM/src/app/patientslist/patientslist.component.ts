// patients-list.component.ts
import { Component, OnInit } from '@angular/core';
import { Patient } from '../model/patients.model';  // Import the Patient model
import { PatientService } from '../service/patient.service';  // Import the Patient Service
import { Router } from '@angular/router';  // Import Router to navigate between views

@Component({
  selector: 'app-patient-list',
  templateUrl: './patientslist.component.html',
  styleUrls: ['./patientslist.component.css']
})
export class PatientsListComponent implements OnInit {
  patients: Patient[] = [];
  searchInput: any;
  searchPatient: Patient[] = [];

  constructor(private patientService: PatientService, private router: Router) { }

  ngOnInit(): void {
    // Fetching patients from the Patient Service on component initialization
    this.patientService.getPatients().subscribe((patientData) => {
      this.patients = patientData;
    });
  }

  // Delete a patient
  deletePatient(toDeletePatient: Patient): void {
    if (toDeletePatient.patient_id !== undefined) {
      this.patientService.deletePatient(toDeletePatient.patient_id).subscribe(() => {
        this.patients = this.patients.filter(patient => patient.patient_id !== toDeletePatient.patient_id);
      });
    }
  }

  // Navigate to Add Patient page
  addPatient() {
    this.router.navigate(['/add-patient']);
  }

  back()
  { 
    this.router.navigate(['/application-menu']);
  }
  // Navigate to Update Patient page
  updatePatient(patientId: string | undefined): void {
    if (patientId !== undefined) {
      this.router.navigate(['update-patient', patientId]);
    } else {
      console.log('Patient id is undefined');
    }
  }

  // Search for patients by patient_id
  searchPatients() {
    this.patientService.getPatients().subscribe((data) => {
      this.searchPatient = data.filter(patient => patient.patient_id === this.searchInput);
      if (this.searchPatient.length > 0) {
        alert('Patient Found!');
      } else {
        alert('Patient Not Found!');
      }
    });
  }

  // Log out function
  logout() {
    sessionStorage.setItem('loggedIn', 'no');
    this.router.navigate(['/login']);
  }
}

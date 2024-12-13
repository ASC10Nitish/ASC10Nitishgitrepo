


import { Component, OnInit } from '@angular/core';
import { Patient } from '../model/patients.model';  
import { PatientService } from '../service/patient.service';  
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-patient-list',
  templateUrl: './patientslist.component.html',
  styleUrls: ['./patientslist.component.css']
})
export class PatientsListComponent implements OnInit {
  patients: Patient[] = []; 
  searchInput: string = '';  
  searchPatient: Patient[] = [];  

  constructor(private patientService: PatientService, private router: Router) { }

  ngOnInit(): void {
    this.patientService.getPatients().subscribe((patientData) => {
      this.patients = patientData;
    });
  }

  deletePatient(id: number): void {
    if (id !== undefined) {
      this.patientService.deletePatient(id).subscribe(() => {
        this.patients = this.patients.filter(patient => patient.id !== id);
      });
    }
  }

  addPatient() {
    const newPatientId = this.generatePatientId(); // Generate the patient ID
    this.router.navigate(['/add-patient'], { queryParams: { patientId: newPatientId } }); // Pass the patient ID to the add-patient form
  }
  
  back() { 
    this.router.navigate(['/application-menu']);
  }

  updatePatient(id: number): void {
    if (id !== undefined) {
      this.router.navigate(['update-patient', id]);
    } else {
      console.log('Patient id is undefined');
    }
  }

  searchPatients() {
    if (!this.searchInput) {
      this.patientService.getPatients().subscribe((patientData) => {
        this.patients = patientData;
      });
      return;
    }

    this.patientService.getPatients().subscribe((data) => {
      this.searchPatient = data.filter(patient => patient.patientId.toString().includes(this.searchInput));

      if (this.searchPatient.length > 0) {
        this.patients = this.searchPatient;
      } else {
        alert('Patient Not Found!');
        this.patients = []; 
      }
    });
  }

  logout() {
    sessionStorage.setItem('loggedIn', 'no');
    this.router.navigate(['/login']);
  }

  private generatePatientId(): string {
    const maxId = this.patients
      .map((patient) => parseInt(patient.patientId.slice(1), 10))
      .filter((num) => !isNaN(num))
      .reduce((max, current) => Math.max(max, current), 0);
    const nextId = maxId + 1;
    return `P${nextId.toString().padStart(3, '0')}`;
  }
}

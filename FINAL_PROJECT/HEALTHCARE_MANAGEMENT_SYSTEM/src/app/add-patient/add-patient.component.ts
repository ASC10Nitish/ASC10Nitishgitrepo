import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PatientService } from '../service/patient.service';  // Assuming you have this service

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css']
})
export class AddPatientComponent implements OnInit {
  addPatientForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private patientService: PatientService
  ) { }

  ngOnInit(): void {
    this.addPatientForm = this.formBuilder.group({
      patient_id: ['',Validators.required],
      first_name: ['', [Validators.required, Validators.pattern('^[A-Za-z ]+$')]],
      last_name: ['', [Validators.required, Validators.pattern('^[A-Za-z ]+$')]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      dob: ['', Validators.required],
      address: ['', Validators.required],
      gender: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.addPatientForm.valid) {
      this.patientService.createPatient(this.addPatientForm.value).subscribe(
        data => {
          alert('Patient Added Successfully');
          this.router.navigate(['/patient-list']);
        },
        error => {
          alert('Error: ' + error.message);
        }
      );
    } else {
      this.addPatientForm.markAllAsTouched(); // Mark all fields as touched to show validation messages
    }
  }
}

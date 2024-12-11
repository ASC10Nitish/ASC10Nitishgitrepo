import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PatientService } from '../service/patient.service';  

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
      patientId: [' ',[Validators.required]],
      firstName: ['', [Validators.required, Validators.pattern('^[A-Za-z ]+$')]],
      lastName: ['', [Validators.required, Validators.pattern('^[A-Za-z ]+$')]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      dob: ['', Validators.required],
      address: ['', Validators.required],
      gender: ['', Validators.required]
    });
  }
  back()
  { 
    this.router.navigate(['/patients']);
  }
  onSubmit(): void {
    if (this.addPatientForm.valid) {
      this.patientService.createPatient(this.addPatientForm.value).subscribe(
        data => {
          this.router.navigate(['/patients']);
        },
        error => {
          alert('Error: ' + error.message);
        }
      );
    } else {
      this.addPatientForm.markAllAsTouched(); 
    }
  }
}


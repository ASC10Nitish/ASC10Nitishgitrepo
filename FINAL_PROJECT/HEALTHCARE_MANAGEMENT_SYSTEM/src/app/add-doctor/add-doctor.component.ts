

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DoctorService } from '../service/doctor.service';

@Component({
  selector: 'app-add-doctor',
  templateUrl: './add-doctor.component.html',
  styleUrls: ['./add-doctor.component.css']
})
export class AddDoctorComponent implements OnInit {
  addDoctorForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private doctorService: DoctorService
  ) { }

  ngOnInit(): void {
    this.addDoctorForm = this.formBuilder.group({
      doctor_id: ['',Validators.required],
      name: ['', Validators.required],
      specialty: ['', Validators.required],
      experience: ['', [Validators.required, Validators.min(0)]],
      contact_number: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }
  back()
{ 
  this.router.navigate(['/doctors']);
}

  onSubmit(): void {
    
    if (this.addDoctorForm.valid) {
      this.doctorService.createDoctor(this.addDoctorForm.value).subscribe(
        data => {
          
          alert('Doctor Added Successfully');
          this.router.navigate(['/doctor-list']);
        },
        error => {
          alert('Error: ' + error.message);
        }
      );
    } else {
      
      this.addDoctorForm.markAllAsTouched();
    }
  }
}

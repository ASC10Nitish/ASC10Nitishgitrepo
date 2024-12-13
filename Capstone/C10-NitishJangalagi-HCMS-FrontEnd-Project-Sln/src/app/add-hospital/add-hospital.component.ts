import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HospitalService } from '../service/hospital.service';

@Component({
  selector: 'app-add-hospital',
  templateUrl: './add-hospital.component.html',
  styleUrls: ['./add-hospital.component.css']
})
export class AddHospitalComponent implements OnInit {
  addHospitalForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private hospitalService: HospitalService
  ) { }

  ngOnInit(): void {
    this.addHospitalForm = this.formBuilder.group({
      hospitalId: ['',Validators.required],
      hospitalName: ['', Validators.required],
      address: ['', Validators.required],
      contactNumber: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
      email: ['', [Validators.required, Validators.email]]
    });
  }
  back()
{ 
  this.router.navigate(['/hospitals']);
}

  onSubmit(): void {
    if (this.addHospitalForm.valid) {
      this.hospitalService.createHospital(this.addHospitalForm.value).subscribe(
        data => {
          
          this.router.navigate(['/hospitals']);
        },
        error => {
          alert('Error: ' + error.message);
        }
      );
    } else {
      this.addHospitalForm.markAllAsTouched(); 
    }
  }
}

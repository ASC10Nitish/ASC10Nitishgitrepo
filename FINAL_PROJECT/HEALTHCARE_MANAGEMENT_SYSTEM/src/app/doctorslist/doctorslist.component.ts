import { Component, OnInit } from '@angular/core';
import { Doctor } from '../model/doctors.model';
import { DoctorService } from '../service/doctor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctorslist.component.html',
  styleUrls: ['./doctorslist.component.css']
})
export class DoctorsListComponent implements OnInit {
  doctors: Doctor[] = [];
  searchInput: any;
  searchDoctor: Doctor[] = [];

  constructor(private doctorService: DoctorService, private router: Router) { }

  ngOnInit(): void {
    this.doctorService.getDoctors().subscribe((doctorData) => {
      this.doctors = doctorData;
    });
  }

  deleteDoctor(toDeleteDoctor: Doctor): void {
    if (toDeleteDoctor.doctor_id !== undefined) {
      this.doctorService.deleteDoctor(toDeleteDoctor.doctor_id).subscribe(() => {
        this.doctors = this.doctors.filter(doctor => doctor.doctor_id !== toDeleteDoctor.doctor_id);
      });
    }
  }

  addDoctor() {
    this.router.navigate(['/add-doctor']);
  }

  back()
  { 
    this.router.navigate(['/application-menu']);
  }
  updateDoctor(doctorId: string | undefined): void {
    if (doctorId !== undefined) {
      this.router.navigate(['update', doctorId]);
    } else {
      console.log('Doctor id is undefined');
    }
  }

  searchDoctors() {
    this.doctorService.getDoctors().subscribe((data) => {
      this.searchDoctor = data.filter(doctor => doctor.doctor_id === this.searchInput);
      if (this.searchDoctor.length > 0) {
        alert('Doctor Found!');
      } else {
        alert('Doctor Not Found!');
      }
    });
  }

  logout() {
    sessionStorage.setItem('loggedIn', 'no');
    this.router.navigate(['/login']);
  }
}

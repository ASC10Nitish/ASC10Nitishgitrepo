

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
  searchInput: string = '';
  searchDoctor: Doctor[] = [];

  constructor(private doctorService: DoctorService, private router: Router) { }

  ngOnInit(): void {
    this.doctorService.getDoctors().subscribe((doctorData) => {
      this.doctors = doctorData;
    });
  }

  

  // Method to delete a doctor by ID
  deleteDoctor(id: number): void {
    if (id !== undefined) {
      this.doctorService.deleteDoctor(id).subscribe(() => {
        this.doctors = this.doctors.filter(doctor => doctor.id !== id);
      });
    }
  }

  // Navigate to add a new doctor
  addDoctor() {
    this.router.navigate(['/add-doctor']);
  }

  // Back to the previous menu
  back() {
    this.router.navigate(['/application-menu']);
  }

  // Update a doctor's details
  updateDoctor(id: number): void {
    if (id !== undefined) {
      this.router.navigate(['update-doctor', id]);
    } else {
      console.log('Doctor id is undefined');
    }
  }

  // Search doctors based on the search input
  searchDoctors() {
    if (!this.searchInput) {
      this.doctorService.getDoctors().subscribe((doctorData) => {
        this.doctors = doctorData;
      });
      return;
    }

    const searchId = Number(this.searchInput);

    this.doctorService.getDoctors().subscribe((data) => {
      this.searchDoctor = data.filter(doctor => doctor.doctorId.toString().includes(this.searchInput));

      if (this.searchDoctor.length > 0) {
        this.doctors = this.searchDoctor;
      } else {
        alert('Doctor Not Found!');
        this.doctors = [];
      }
    });
  }

  // Logout functionality
  logout() {
    sessionStorage.setItem('loggedIn', 'no');
    this.router.navigate(['/login']);
  }
}

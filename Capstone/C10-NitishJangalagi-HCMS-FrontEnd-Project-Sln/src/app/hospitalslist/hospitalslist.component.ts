import { Component, OnInit } from '@angular/core';
import { Hospital } from '../model/hospitals.model';
import { HospitalService } from '../service/hospital.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hospital-list',
  templateUrl: './hospitalslist.component.html',
  styleUrls: ['./hospitalslist.component.css']
})
export class HospitalListComponent implements OnInit {
  hospitals: Hospital[] = [];
  searchInput: string='';
  searchHospital: Hospital[] = [];

  constructor(private hospitalService: HospitalService, private router: Router) { }

  // Fetch all hospitals on component initialization
  ngOnInit(): void {
    this.hospitalService.getHospitals().subscribe((hospitalData) => {
      this.hospitals = hospitalData;
    });
  }

  // Delete a hospital by id
  deleteHospital(id: number): void {
    if (id !== undefined) {
      this.hospitalService.deleteHospital(id).subscribe(() => {
        this.hospitals = this.hospitals.filter(hospital => hospital.id !== id);
      });
    }
  }

 
  // Navigate to add hospital form
  addHospital() {
    this.router.navigate(['/add-hospital']);
  }

  // Navigate back to application menu
  back() {
    this.router.navigate(['/application-menu']);
  }

  // Navigate to update hospital form by id
  updateHospital(id: number): void {
    if (id !== undefined) {
      this.router.navigate(['update-hospital', id]);
    } else {
      console.log('Hospital id is undefined');
    }
  }

  // Search hospitals by id
  searchHospitals() {
    // If no input is entered, show all hospitals
    if (!this.searchInput) {
      this.hospitalService.getHospitals().subscribe((hospitalData) => {
        this.hospitals = hospitalData;
      });
      return;
    }

    const searchId = Number(this.searchInput);

    
    this.hospitalService.getHospitals().subscribe((data) => {
      this.searchHospital = data.filter(hospital => hospital.hospitalId.toString(). includes(this.searchInput));

      if (this.searchHospital.length > 0) {
       
        this.hospitals = this.searchHospital;
      } else {
        
        alert('Hospital Not Found!');
        this.hospitals = []; 
      }
    });
  }

  logout() {
    sessionStorage.setItem('loggedIn', 'no');
    this.router.navigate(['/login']);
  }
}

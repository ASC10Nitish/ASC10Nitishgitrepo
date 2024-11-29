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
  searchInput: any;
  searchHospital: Hospital[] = [];

  constructor(private hospitalService: HospitalService, private router: Router) { }

  ngOnInit(): void {
    this.hospitalService.getHospitals().subscribe((hospitalData) => {
      this.hospitals = hospitalData;
    });
  }

  deleteHospital(toDeleteHospital: Hospital): void {
    if (toDeleteHospital.hospital_id !== undefined) {
      this.hospitalService.deleteHospital(toDeleteHospital.hospital_id).subscribe(() => {
        this.hospitals = this.hospitals.filter(hospital => hospital.hospital_id !== toDeleteHospital.hospital_id);
      });
    }
  }

  addHospital() {
    this.router.navigate(['/add-hospital']);
  }

  updateHospital(hospitalId: string | undefined): void {
    if (hospitalId !== undefined) {
      this.router.navigate(['update', hospitalId]);
    } else {
      console.log('Hospital id is undefined');
    }
  }

  searchHospitals() {
    this.hospitalService.getHospitals().subscribe((data) => {
      this.searchHospital = data.filter(hospital => hospital.hospital_id === this.searchInput);
      if (this.searchHospital.length > 0) {
        alert('Hospital Found!');
      } else {
        alert('Hospital Not Found!');
      }
    });
  }

  logout() {
    sessionStorage.setItem('loggedIn', 'no');
    this.router.navigate(['/login']);
  }
}

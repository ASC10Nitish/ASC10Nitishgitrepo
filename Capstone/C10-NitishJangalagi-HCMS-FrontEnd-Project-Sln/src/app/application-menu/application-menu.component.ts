import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-application-menu',
  templateUrl: './application-menu.component.html',
  styleUrls: ['./application-menu.component.css']
})
export class ApplicationMenuComponent {

  constructor(private router: Router) { }

  navigateToDoctors() {
    this.router.navigate(['/doctors']);
  }

  navigateToPatients() {
    this.router.navigate(['/patients']);
  }

  navigateToReviews() {
    this.router.navigate(['/reviews']);
  }
  navigateToHospitals() {
    this.router.navigate(['/hospitals']);
  }

  navigateToAppointments() {
    this.router.navigate(['/appointments']);
  }
}

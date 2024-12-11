
// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { AuthGuardService } from '../service/auth-guard.service';
// @Component({
//   selector: 'app-navbar',
//   templateUrl: './navbar.component.html',
//   styleUrls: ['./navbar.component.css']
// })
// export class NavbarComponent implements OnInit {
//   isLoggedIn: boolean = false;

//   constructor(
//     private authGuardService: AuthGuardService, 
//     private router: Router
//   ) {}

//   ngOnInit(): void {
//     // Check if the user is logged in
//     this.isLoggedIn = this.authGuardService.isAuthenticated();
//   }

//   logout(): void {
//     // Call the logout method in your auth service
//     this.authGuardService.logout();
//     this.isLoggedIn = false;
//     this.router.navigate(['/login']);  // Redirect to login page after logout
//   }
// }


import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGuardService } from '../service/auth-guard.service';  // Your AuthGuardService

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLoggedIn: boolean = false;

  constructor(
    private authGuardService: AuthGuardService, 
    private router: Router
  ) {}

  ngOnInit(): void {
    // Check if the user is logged in
    this.isLoggedIn = this.authGuardService.isAuthenticated();
  }

  logout(): void {
    // Call the logout method in your auth service
    this.authGuardService.logout();
    this.isLoggedIn = false;
    this.router.navigate(['/login']);  // Redirect to login page after logout
  }
}

import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";

import { RouterModule, RouterOutlet } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { HttpClientModule } from "@angular/common/http";

import { CommonModule } from "@angular/common";

import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { LoginComponent } from "./login/login.component";
import { ApplicationMenuComponent } from "./application-menu/application-menu.component";
import { DoctorsListComponent } from "./doctorslist/doctorslist.component";
import { PatientsListComponent } from "./patientslist/patientslist.component";
import { AppointmentsComponent } from "./appointmentslist/appointmentslist.component";
import { ReviewsListComponent } from "./reviewslist/reviewslist.component";
import { HospitalListComponent } from "./hospitalslist/hospitalslist.component";
import { UpdateAppointmentComponent } from "./update-appointment/update-appointment.component";
import { UpdateDoctorComponent } from "./update-doctor/update-doctor.component";
import { UpdateHospitalComponent } from "./update-hospital/update-hospital.component";
import { UpdatePatientComponent } from "./update-patient/update-patient.component";
import { UpdateReviewComponent } from "./update-review/update-review.component";
import { AddAppointmentComponent } from "./add-appointment/add-appointment.component";
import { AddDoctorComponent } from "./add-doctor/add-doctor.component";
import { AddHospitalComponent } from "./add-hospital/add-hospital.component";
import { AddPatientComponent } from "./add-patient/add-patient.component";
import { AddReviewComponent } from "./add-review/add-review.component";
import { RegisterAdminComponent } from "./register-admin/register-admin.component" ;
import { NavbarComponent } from "./navbar/navbar.component";

import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatInputModule } from '@angular/material/input';

import { MatFormFieldModule } from '@angular/material/form-field';


@NgModule({
    declarations :[AppComponent, LoginComponent,ApplicationMenuComponent,DoctorsListComponent,PatientsListComponent,AppointmentsComponent,ReviewsListComponent,HospitalListComponent,UpdateAppointmentComponent,UpdateDoctorComponent,UpdateHospitalComponent,UpdatePatientComponent,UpdateReviewComponent,AddAppointmentComponent,AddDoctorComponent,AddHospitalComponent,AddPatientComponent,AddReviewComponent,RegisterAdminComponent,NavbarComponent],
    
    imports: [BrowserModule, AppRoutingModule, RouterOutlet, ReactiveFormsModule, RouterModule, FormsModule, CommonModule, HttpClientModule,MatButtonModule,
      MatToolbarModule,
      MatCardModule,
      MatIconModule,
      BrowserAnimationsModule,
    MatFormFieldModule,MatInputModule],
    bootstrap:[AppComponent],
    providers: [
      provideAnimationsAsync()
    ]
})

export class AppModule{}

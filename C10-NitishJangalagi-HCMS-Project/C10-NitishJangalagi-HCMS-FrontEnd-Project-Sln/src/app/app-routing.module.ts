import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

import { AuthGuardService } from './service/auth-guard.service';
import { LoginComponent } from './login/login.component';
import { ApplicationMenuComponent } from './application-menu/application-menu.component';
import { DoctorsListComponent } from './doctorslist/doctorslist.component';
import { PatientsListComponent } from './patientslist/patientslist.component';
import { ReviewsListComponent } from './reviewslist/reviewslist.component';
import { AppointmentsComponent } from './appointmentslist/appointmentslist.component';
import { HospitalListComponent } from './hospitalslist/hospitalslist.component';
import { AddAppointmentComponent } from './add-appointment/add-appointment.component';
import { AddDoctorComponent } from './add-doctor/add-doctor.component';
import { AddHospitalComponent } from './add-hospital/add-hospital.component';
import { AddPatientComponent } from './add-patient/add-patient.component';
import { AddReviewComponent } from './add-review/add-review.component';
import { UpdateAppointmentComponent } from './update-appointment/update-appointment.component';

import { RegisterAdminComponent } from './register-admin/register-admin.component';
import { UpdateHospitalComponent } from './update-hospital/update-hospital.component';
import { UpdateDoctorComponent } from './update-doctor/update-doctor.component';
import { UpdatePatientComponent } from './update-patient/update-patient.component';
import { UpdateReviewComponent } from './update-review/update-review.component';

const routes: Routes = [

   { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },

  { path: 'application-menu', component: ApplicationMenuComponent,canActivate:[AuthGuardService]},

  { path: 'doctors', component: DoctorsListComponent },
  { path: 'patients', component: PatientsListComponent },
  { path: 'reviews', component: ReviewsListComponent},
  { path: 'appointments', component: AppointmentsComponent },
  { path: 'hospitals', component: HospitalListComponent },
 
  {path:'add-appointment',component:AddAppointmentComponent},
  {path:'update-appointment/:id',component:UpdateAppointmentComponent},

  {path:'add-hospital',component:AddHospitalComponent},
  {path:'update-hospital/:id',component:UpdateHospitalComponent},

  {path:'add-doctor',component:AddDoctorComponent},
  { path: 'update-doctor/:id', component: UpdateDoctorComponent },

  {path:'add-patient',component:AddPatientComponent},
  {path:'update-patient/:id',component:UpdatePatientComponent},

  {path:'add-review',component:AddReviewComponent},
  {path:'update-review',component:UpdateReviewComponent},

  {path:'registeradmin',component:RegisterAdminComponent}

]

@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  bootstrap:[AppComponent]
 
})

export class AppRoutingModule { }

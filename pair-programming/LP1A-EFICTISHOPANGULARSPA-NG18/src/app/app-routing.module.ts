import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ListEmpComponent } from './list-emp/list-emp.component';
import { UpdateEmpComponent } from './update-emp/update-emp.component';
import { AuthGuardService } from './service/auth-guard.service';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  // {path:'',component:AppComponent},
  {path:'Login',component:LoginComponent},
  {path:'employees',component:ListEmpComponent,canActivate:[AuthGuardService]},
  {path:'update/:id',component:UpdateEmpComponent},
  {path:'register',component:RegisterComponent}
]

@NgModule({
  
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  bootstrap:[AppComponent]
 
})

export class AppRoutingModule { }

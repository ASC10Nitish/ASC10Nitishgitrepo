import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { LoginComponent } from "./login/login.component";
import { RouterOutlet } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ListEmpComponent } from "./list-emp/list-emp.component";
import { HttpClientModule } from "@angular/common/http";
import { UpdateEmpComponent } from "./update-emp/update-emp.component";
import { CommonModule } from "@angular/common";
import { NavbarComponent } from "./navbar/navbar.component";
import { RegisterComponent } from "./register/register.component";
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatTooltipModule } from "@angular/material/tooltip";


@NgModule({
    declarations :[AppComponent,LoginComponent,ListEmpComponent,UpdateEmpComponent,NavbarComponent,RegisterComponent],
    
    imports:[BrowserModule,AppRoutingModule,RouterOutlet,ReactiveFormsModule,FormsModule,CommonModule,HttpClientModule,MatInputModule,
      MatButtonModule,MatFormFieldModule,MatTooltipModule],
    bootstrap:[AppComponent],
    providers: [
      provideAnimationsAsync()
    ]
})

export class AppModule{}

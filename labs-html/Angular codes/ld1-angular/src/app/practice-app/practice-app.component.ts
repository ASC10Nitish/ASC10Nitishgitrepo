
/*import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 
import { FormBuilder,FormGroup,ReactiveFormsModule } from '@angular/forms';

interface FormData {
  name: string;
  password: string;
  gender: string;
  paymentMethod: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './practice-app.component.html',
  styleUrls: ['./practice-app.component.css'],
})

export class PracticeAppComponent {
  title = 'Registration Form';
  formDataList: FormData[] = [];
  name: string = '';
  password: string = '';
  gender: string = '';
  paymentMethod: string = '';
  address: string = ''; 
  date: string = '';    

  displayData(event: Event) {
    event.preventDefault();
    const newData: FormData = {
      name: this.name,
      password: this.password,
      gender: this.gender,
      paymentMethod: this.paymentMethod,
    };
    this.formDataList.push(newData);
    this.resetForm();
  }

  resetForm() {
    this.name = '';
    this.password = '';
    this.gender = '';
    this.paymentMethod = '';
    this.address = ''; 
    this.date = '';    
  }

  refreshTable() {
    this.formDataList = [];
  }



} 
  

*/

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 

interface FormData {
  id: number; // Add ID for tracking
  name: string;
  password: string;
  gender: string;
  paymentMethod: string;
  address: string; // Include address
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './practice-app.component.html',
  styleUrls: ['./practice-app.component.css'],
})

export class PracticeAppComponent {
  title = 'Registration Form';
  formDataList: FormData[] = [];
  currentData: FormData | null = null; // To hold data for editing
  nextId: number = 1; // Track next ID for new entries

  name: string = '';
  password: string = '';
  gender: string = '';
  paymentMethod: string = '';
  address: string = ''; 
  date: string = '';    

  displayData(event: Event) {
    event.preventDefault();
    const newData: FormData = {
      id: this.nextId++, // Increment ID for new entries
      name: this.name,
      password: this.password,
      gender: this.gender,
      paymentMethod: this.paymentMethod,
      address: this.address // Include address
    };
    this.formDataList.push(newData);
    this.resetForm();
  }

  editData(data: FormData) {
    this.currentData = data;
    this.name = data.name;
    this.password = data.password;
    this.gender = data.gender;
    this.paymentMethod = data.paymentMethod;
    this.address = data.address; 
  }

  updateData() {
    if (this.currentData) {
      const index = this.formDataList.findIndex(item => item.id === this.currentData!.id);
      if (index !== -1) {
        this.formDataList[index] = {
          ...this.currentData,
          name: this.name,
          password: this.password,
          gender: this.gender,
          paymentMethod: this.paymentMethod,
          address: this.address
        };
        this.resetForm();
      }
    }
  }

  deleteData(id: number) {
    this.formDataList = this.formDataList.filter(data => data.id !== id);
  }

  resetForm() {
    this.name = '';
    this.password = '';
    this.gender = '';
    this.paymentMethod = '';
    this.address = ''; 
    this.date = '';    
    this.currentData = null; // Clear current data on reset
  }

  refreshTable() {
    this.formDataList = [];
    this.nextId = 1; // Reset ID counter
  }
}



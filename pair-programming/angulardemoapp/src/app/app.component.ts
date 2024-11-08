//dynamic form implemented 
/*
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  title = 'angulardemoapp';

  name: string = '';
  password: string = '';
  gender: string = '';
  paymentMethod: string = 'CREDITCARD'; 
  displayData(event: Event) {
    event.preventDefault();
    
    this.resetForm();
  }

  resetForm() {
    this.name = '';
    this.password = '';
    this.gender = '';
    this.paymentMethod = 'CREDITCARD'; 
  }

  refreshTable() {
    
    this.resetForm();
  }
}
  */




import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angulardemoapp';
}

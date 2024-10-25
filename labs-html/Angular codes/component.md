import {Component} from '@angular/core';

@Component(
  {
    selector : `app-root`,
    template : `<h1>A good app by me 🙌{{city}}</h1>
    result of 1-1 is {{1-1}},
    Original price is : 100,
    discounted price is : {{100*.9}}
    `,
    styles : ` h1{color : blue} `,
    standalone : true
  }
)

export class AppComponent {
  city = 'Bengaluru'; 
}
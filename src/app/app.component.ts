import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template:`<div><app-products></app-products></div>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'learnAngular';
}

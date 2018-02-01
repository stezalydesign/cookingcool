import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <h1>{{pageTitle}}</h1>
      <app-ingredients></app-ingredients>
    </div>
  `
})
export class AppComponent {
  pageTitle = 'Cool Cooking';
}

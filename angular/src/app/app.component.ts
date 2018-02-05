import {Component} from '@angular/core';
import {IngredientService} from './ingredients/ingredient.service';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <h1>{{pageTitle}}</h1>
      <app-ingredients></app-ingredients>
    </div>
  `,
  providers: [IngredientService]
})
export class AppComponent {
  pageTitle = 'Cooking Cool';
}

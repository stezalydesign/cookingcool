import {Component} from '@angular/core';
import {IngredientService} from './ingredients/ingredient.service';
import {RecipeService} from './search-recipes/recipe.service';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <h1>{{pageTitle}}</h1>
      <app-search-recipes></app-search-recipes>
    </div>
  `,
  providers: [IngredientService, RecipeService]
})
export class AppComponent {
  pageTitle = 'Cooking Cool';
}

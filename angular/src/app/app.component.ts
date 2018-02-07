import {Component} from '@angular/core';
import {IngredientService} from './ingredients/ingredient.service';
import {RecipeService} from './search-recipes/recipe.service';

@Component({
  selector: 'app-root',
  template: `
    <div class="centralized-text">
      <h1 class="center-pill">&lt;LOGO&gt;</h1>
      <app-search-recipes></app-search-recipes>
    </div>
  `,
  providers: [IngredientService, RecipeService]
})
export class AppComponent {
}

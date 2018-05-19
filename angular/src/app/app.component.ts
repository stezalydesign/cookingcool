import {Component} from '@angular/core';
import {RecipeService} from './search-recipes/recipe.service';

@Component({
  selector: 'app-root',
  template: `
    <div class="centralized-text">
      <h1 class="center-pill">&lt;LOGO&gt;</h1>
      <app-search-recipes></app-search-recipes>
    </div>
  `,
  providers: [RecipeService]
})
export class AppComponent {
}

import {Component, OnInit} from '@angular/core';
import {Recipe} from './recipe';
import {RecipeService} from './recipe.service';

@Component({
  selector: 'app-search-recipes',
  templateUrl: './search-recipes.component.html',
  styleUrls: ['./search-recipes.component.css']
})
export class SearchRecipesComponent implements OnInit {

  _listFilter: string;
  filteredRecipes: Recipe[];
  recipes: Recipe[];
  errorMessage: string;

  constructor(private _recipeService: RecipeService) {
  }

  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredRecipes = this._recipeService.filterRecipes(this._listFilter, this.recipes);
  }

  ngOnInit(): void {

    this._recipeService.getRecipes()
      .subscribe(recipes => {
          this.recipes = recipes;
        },
        error => this.errorMessage = <any> error);
  }
}

import {Component, OnInit} from '@angular/core';
import {IngredientService} from './ingredient.service';
import {Ingredient} from '../search-recipes/ingredient';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredient-list.component.html',
  styleUrls: ['./ingredient-list.component.css']
})
export class IngredientListComponent implements OnInit {

  pageTitle = 'Ingredient List';
  _listFilter: string;
  filteredIngredients: Ingredient[];
  ingredients: Ingredient[];
  errorMessage: string;

  constructor(private _ingredientService: IngredientService) {

  }

  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredIngredients = this._listFilter ? this.performFilter(this.listFilter) : this.ingredients;
  }

  private performFilter(filterBy: string): Ingredient[] {

    filterBy = filterBy.toLocaleLowerCase();
    return this.ingredients.filter(
      (ingredient: Ingredient) => ingredient.name.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  ngOnInit(): void {

    this._ingredientService.getIngredients()
      .subscribe(ingredients => {
          this.ingredients = ingredients;
          this.filteredIngredients = this.ingredients;
        },
        error => this.errorMessage = <any> error);
  }
}

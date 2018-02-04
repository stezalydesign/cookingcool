import {Component} from '@angular/core';
import {Ingredient} from './ingredient';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredient-list.component.html',
  styleUrls: ['./ingredient-list.component.css']
})
export class IngredientListComponent {

  pageTitle = 'Ingredient List';
  _listFilter: string;
  filteredIngredients: Ingredient[];
  ingredients: Ingredient[] = [
    {
      'id': 1,
      'name': 'Carrot',
    },
    {
      'id': 2,
      'name': 'Onion',
    },
    {
      'id': 3,
      'name': 'Tomato',
    },
    {
      'id': 4,
      'name': 'Mushroom',
    },
    {
      'id': 5,
      'name': 'Pepper',
    },
  ];

  constructor() {
    this.filteredIngredients = this.ingredients;
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
}

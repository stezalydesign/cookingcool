import {Ingredient} from './ingredient';

export class Recipe {

  id: number;
  name: string;
  ingredients: Ingredient[];
  directions: string;
  imageUrl: string;


  constructor(json: any) {
    this.id = json.id;
    this.name = json.name;
    this.ingredients = json.ingredients;
    this.directions = json.directions;
    this.imageUrl = json.imageUrl;
  }

  public hasIngredient(ingredientName: string): boolean {

    for (const ingredient of this.ingredients) {

      if (ingredient.name.toLocaleLowerCase() === ingredientName) {
        return true;
      }
    }

    return false;

  }
}

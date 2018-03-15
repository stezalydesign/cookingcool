import {Ingredient} from './ingredient';

export class Recipe {

  id: number;
  name: string;
  ingredients: Ingredient[];
  directions: string;
  imageUrl: string;


  constructor(object: any) {

    this.id = object.id;
    this.name = object.name;

    const ingredients: Ingredient[] = [];

    for (const name of object.ingredients) {
      ingredients.push(new Ingredient(name));
    }

    this.ingredients = ingredients;

    this.directions = object.directions;
    this.imageUrl = object.imageUrl;
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

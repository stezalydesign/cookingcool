import {Ingredient} from './ingredient';

export class Recipe {

  id: number;
  name: string;
  ingredients: Ingredient[];
  directions: string;
  imageUrl: string;
}

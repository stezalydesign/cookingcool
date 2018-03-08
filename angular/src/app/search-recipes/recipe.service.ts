import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import {Recipe} from './recipe';
import {map} from 'rxjs/operators';

@Injectable()
export class RecipeService {

  // TODO when we stop using this recipes.json, we must revert the change in angular/.angular-cli.json
  private _recipeUrl = './api/recipes/recipes.json';

  constructor(private _httpClient: HttpClient) {
  }

  filterRecipes(searchString: string, recipes: Recipe[]): Recipe[] {

    const filteredRecipes: Recipe[] = [];

    // if there's nothing to search
    if (searchString == null || searchString.trim().length === 0) {
      return filteredRecipes;
    }

    searchString = searchString.toLocaleLowerCase();

    for (const recipe of recipes) {

      if (recipe.hasIngredient(searchString)) {
        console.log(recipe.name + ' has ' + searchString);
        filteredRecipes.push(recipe);
      }
    }

    return filteredRecipes;
  }

  getRecipes(): Observable<Recipe[]> {
    return this._httpClient.get<Recipe[]>(this._recipeUrl)
      .do(next => console.log('All: ' + JSON.stringify(next)))
      .pipe(
        map(next => this.instantiateRecipes(next)),
      )
      .catch(this.handleError);

  }

  private instantiateRecipes(objects: Recipe[]): Recipe[] {

    const recipes: Recipe[] = [];

    for (const object of objects) {
      recipes.push(new Recipe(object));
    }

    return recipes;


  }


  private handleError(err: HttpErrorResponse) {
    console.log(err.message);
    return Observable.throw(err.message);
  }

}

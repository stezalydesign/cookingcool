import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import {Ingredient} from '../search-recipes/ingredient';
import {Recipe} from './recipe';

@Injectable()
export class RecipeService {

  // TODO when we stop using this recipes.json, we must revert the change in angular/.angular-cli.json
  private _recipeUrl = './api/recipes/recipes.json';

  constructor(private _httpClient: HttpClient) {
  }

  getRecipes(): Observable<Recipe[]> {
    return this._httpClient.get<Recipe[]>(this._recipeUrl)
      .do(data => console.log('All: ' + JSON.stringify(data)))
      .catch(this.handleError);

  }

  private handleError(err: HttpErrorResponse) {
    console.log(err.message);
    return Observable.throw(err.message);
  }

}

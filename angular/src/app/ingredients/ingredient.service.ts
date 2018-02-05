import {Injectable} from '@angular/core';
import {Ingredient} from './ingredient';
import {Observable} from 'rxjs/Observable';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class IngredientService {

   // TODO when we stop using this ingredients.json, we must revert the change in angular/.angular-cli.json
  private _ingredientUrl = './api/ingredients/ingredients.json';

  constructor(private _httpClient: HttpClient) {
  }

  getIngredients(): Observable<Ingredient[]> {
    return this._httpClient.get<Ingredient[]>(this._ingredientUrl)
      .do(data => console.log('All: ' + JSON.stringify(data)))
      .catch(this.handleError);

  }

  private handleError(err: HttpErrorResponse) {
    console.log(err.message);
    return Observable.throw(err.message);
  }

}

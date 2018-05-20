import {throwError as observableThrowError, Observable} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {Recipe} from './recipe';
import {AngularFirestore, AngularFirestoreCollection} from 'angularfire2/firestore';

@Injectable()
export class RecipeService {

  constructor(private angularFirestore: AngularFirestore) {
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
        filteredRecipes.push(recipe);
      }
    }

    return filteredRecipes;
  }

  getRecipes(): Observable<Recipe[]> {

    const dbRecipesColLection: AngularFirestoreCollection<Recipe> = this.angularFirestore.collection('recipes');

    return dbRecipesColLection.valueChanges().pipe(
      map(next => this.instantiateRecipes(next)),
    ).pipe(
      catchError(this.handleError));

  }

  private instantiateRecipes(objects: Recipe[]): Recipe[] {

    const recipes: Recipe[] = [];

    for (const object of objects) {
      recipes.push(new Recipe(object));
    }

    return recipes;
  }

  private handleError(err: Error) {
    console.log(err.message);
    return observableThrowError(err.message);
  }

}

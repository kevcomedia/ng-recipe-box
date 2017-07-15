import { Injectable } from '@angular/core';
import { Recipe } from './recipe';

@Injectable()
export class RecipeService {
  private localStorageKey = '_gckev_ng-recipes';

  /**
   * Creates a stringified array of recipes on local storage if none is found.
   */
  initializeRecipeList(): void {
    if (!localStorage.getItem(this.localStorageKey)) {
      const initialRecipes: Recipe[] = [
        {
          name: 'Fluffy Rice',
          ingredients: ['rice', 'water']
        },
        {
          name: 'Pork Adobo',
          ingredients: ['pork', 'vinegar', 'soy sauce', 'onions', 'oil']
        }
      ];

      localStorage
        .setItem(this.localStorageKey, JSON.stringify(initialRecipes));
    }
  }

  getRecipeList(): Promise<Recipe[]> {
    // Reject if somehow the recipes are not in local storage, whatever
    if (!localStorage.getItem(this.localStorageKey)) {
      return Promise.reject('Nothing in local storage');
    }

    return Promise.resolve(
      JSON.parse(localStorage.getItem(this.localStorageKey)));
  }
}

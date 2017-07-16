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
          id: 1,
          name: 'Fluffy Rice',
          ingredients: ['rice', 'water']
        },
        {
          id: 2,
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

  getRecipe(id: number): Promise<Recipe> {
    return this.getRecipeList()
      .then(recipes => recipes.find(recipe => recipe.id === id));
  }
}

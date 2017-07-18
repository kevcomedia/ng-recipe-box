import { Injectable } from '@angular/core';
import { Recipe } from './recipe';

@Injectable()
export class RecipeService {
  private localStorageKey = '_gckev_ng-recipes';

  /**
   * Creates a stringified array of recipes on local storage if none is found.
   */
  private initializeRecipeList(): Promise<Recipe[]> {
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

      return Promise.resolve(initialRecipes);
    }
  }

  getRecipeList(): Promise<Recipe[]> {
    if (!localStorage.getItem(this.localStorageKey)) {
      return this.initializeRecipeList();
    }

    return Promise.resolve(
      JSON.parse(localStorage.getItem(this.localStorageKey)));
  }

  getRecipe(id: number): Promise<Recipe> {
    return this.getRecipeList()
      .then(recipes => recipes.find(recipe => recipe.id === id));
  }

  addRecipe({name = '', ingredients = []} = {}): Promise<Recipe> {
    return this.getRecipeList()
      .then(recipes => {
        // the last recipe in storage should have the largest id
        const largestId = recipes[recipes.length - 1].id;
        const newRecipe = {
          id: largestId + 1,
          name,
          ingredients
        };
        recipes.push(newRecipe);
        this.updateLocalStorage(recipes);
        return newRecipe;
      });
  }

  private updateLocalStorage(recipes: Recipe[]): void {
    localStorage.setItem(this.localStorageKey, JSON.stringify(recipes));
  }
}

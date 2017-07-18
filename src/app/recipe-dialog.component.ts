import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Recipe } from './recipe';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipe-dialog',
  templateUrl: './recipe-dialog.component.html'
})
export class RecipeDialogComponent {
  name: string;
  ingredients: string;

  constructor(
    private recipeService: RecipeService,
    private router: Router
  ) {}

  saveRecipe(): void {
    this.recipeService.addRecipe({
      name: this.name,
      ingredients: this.ingredients.split('\n')
    })
    .then(recipe => this.router.navigate(['recipe', recipe.id]));
  }
}

import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  recipes: Recipe[];

  constructor(private recipeService: RecipeService) {
    recipeService.recipesUpdated$
      .subscribe(recipes => this.recipes = recipes);
  }

  ngOnInit(): void {
    this.recipeService.getRecipeList()
      .then(recipes => this.recipes = recipes);
  }
}

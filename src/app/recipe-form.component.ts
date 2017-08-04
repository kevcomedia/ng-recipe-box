import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Location } from '@angular/common';

import 'rxjs/add/operator/switchMap';

import { Recipe } from './recipe';
import { RecipeService } from './recipe.service';

@Component({
  templateUrl: './recipe-form.component.html'
})
export class RecipeFormComponent implements OnInit {
  name: string;
  ingredients: string;
  buttonText: string;

  constructor(
    private recipeService: RecipeService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) =>
        this.recipeService.getRecipe(+params.get('id')))
      .subscribe((recipe?: Recipe) => {
        if (recipe) {
          this.name = recipe.name;
          this.ingredients = recipe.ingredients.join('\n');
          this.buttonText = 'Save Changes';
        } else {
          this.buttonText = 'Add Recipe';
        }
      });
  }

  saveRecipe(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) =>
        this.recipeService.getRecipe(+params.get('id')))
      .subscribe((recipe?: Recipe) => {
        let p: Promise<Recipe>;

        if (recipe) {
          p = this.recipeService.editRecipe({
            id: recipe.id,
            newName: this.name,
            newIngredients: this.ingredients.split('\n')
          });
        } else {
          p = this.recipeService.addRecipe({
            name: this.name,
            ingredients: this.ingredients.split('\n')
          });
        }

        p.then(r => this.router.navigate(['recipe', r.id]));
      });
  }

  goBack(): void {
    this.location.back();
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Recipe } from './recipe';
import { RecipeService } from './recipe.service';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html'
})
export class RecipeDetailComponent implements OnInit {
  selectedRecipe: Recipe;
  willDelete = false;

  constructor(
    private recipeService: RecipeService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.recipeService.getRecipe(+params.get('id')))
      .subscribe(recipe => this.selectedRecipe = recipe);
  }

  showDeleteConfirmation() {
    this.willDelete = true;
  }

  hideDeleteConfirmation() {
    this.willDelete = false;
  }

  deleteRecipe() {
    this.recipeService.deleteRecipe(this.selectedRecipe.id)
      .then(recipe => this.router.navigate(['/']));
  }
}

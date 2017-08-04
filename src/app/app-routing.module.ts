import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RecipeDetailComponent } from './recipe-detail.component';
import { RecipeFormComponent } from './recipe-form.component';

const appRoutes: Routes = [
  {
    path: 'recipe/:id',
    component: RecipeDetailComponent
  },
  {
    path: 'recipe/:id/edit',
    component: RecipeFormComponent
  },
  {
    path: 'new',
    component: RecipeFormComponent
  },
  {
    // TODO redirect to some Page Not Found view
    path: '**',
    redirectTo: '/',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { RecipeListComponent } from './recipe-list.component';
import { RecipeDetailComponent } from './recipe-detail.component';
import { RecipeDialogComponent } from './recipe-dialog.component';
import { RecipeService } from './recipe.service';

@NgModule({
  declarations: [
    AppComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeDialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'recipe/:id',
        component: RecipeDetailComponent
      },
      {
        path: 'new',
        component: RecipeDialogComponent
      }
    ])
  ],
  providers: [RecipeService],
  bootstrap: [AppComponent]
})
export class AppModule { }

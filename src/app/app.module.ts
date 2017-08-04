import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { RecipeListComponent } from './recipe-list.component';
import { RecipeDetailComponent } from './recipe-detail.component';
import { RecipeFormComponent } from './recipe-form.component';
import { RecipeService } from './recipe.service';

@NgModule({
  declarations: [
    AppComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [RecipeService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {

  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('test recipe','sample description', `https://www.metmuseum.org/-/media/images/visit/
    food-drink/the-eatery-ground-floor.jpg?h=960&w=1440&sc_lang=en&hash=3112A4CF79610CDD18D24E997DB975A6`),    
    
    new Recipe('test recipe 2','sample description', `https://www.metmuseum.org/-/media/images/visit/
    food-drink/the-eatery-ground-floor.jpg?h=960&w=1440&sc_lang=en&hash=3112A4CF79610CDD18D24E997DB975A6`)
  ];

  onRecipeSelected(recipe: Recipe){
this.recipeWasSelected.emit(recipe)
  }

}

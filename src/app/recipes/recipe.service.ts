import{Injectable} from '@angular/core'
import {Subject} from 'rxjs';
import { Recipe } from "./recipe.model";
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService{
  recipesChanged = new Subject<Recipe[]>();

    private recipes: Recipe[] = [
        new Recipe('Sample recipe','sample description', `https://www.metmuseum.org/-/media/images/visit/
        food-drink/the-eatery-ground-floor.jpg?h=960&w=1440&sc_lang=en&hash=3112A4CF79610CDD18D24E997DB975A6`,[
          new Ingredient('Chopped Meat', 1),
          new Ingredient('French Fries', 20),
          new Ingredient('Buns', 2),
          new Ingredient('Tomatoe', 2),
        ]),    
      ];

      constructor(private shoppingService: ShoppingListService){}

      setRecipes(recipes: Recipe[]){
        this.recipes = recipes;
        this.recipesChanged.next(this.recipes.slice());
      }

      getRecipes(){
        return this.recipes.slice();
      }

      getRecipe(index: number){
        return this.recipes[index];
      }

      addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.shoppingService.addIngredients(ingredients);
      }

      addRecipe(recipe: Recipe){
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
      }

      updateRecipe(index: number, newRecipe: Recipe){
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());
      }

      deleteRecipe(index: number){
        this.recipes.splice(index, 1);
        this.recipesChanged.next(this.recipes.slice());
      }
}
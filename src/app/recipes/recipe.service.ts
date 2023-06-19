import{Injectable} from '@angular/core'
import { Recipe } from "./recipe.model";
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService{

    private recipes: Recipe[] = [
        new Recipe('test recipe','sample description', `https://www.metmuseum.org/-/media/images/visit/
        food-drink/the-eatery-ground-floor.jpg?h=960&w=1440&sc_lang=en&hash=3112A4CF79610CDD18D24E997DB975A6`,[
          new Ingredient('Meat', 1),
          new Ingredient('French Fries', 20),
        ]),    
        
        new Recipe('test recipe 2','sample description', `https://www.metmuseum.org/-/media/images/visit/
        food-drink/the-eatery-ground-floor.jpg?h=960&w=1440&sc_lang=en&hash=3112A4CF79610CDD18D24E997DB975A6`,[
          new Ingredient('Buns', 2),
          new Ingredient('Lettuce', 1),
        ])
      ];

      constructor(private shoppingService: ShoppingListService){}

      getRecipes(){
        return this.recipes.slice();
      }

      getRecipe(index: number){
        return this.recipes[index];
      }

      addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.shoppingService.addIngredients(ingredients);
      }

}
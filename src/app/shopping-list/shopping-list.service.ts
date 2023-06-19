import {Subject} from 'rxjs';
import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService{

    ingrdientsChanged = new Subject<Ingredient[]>();
    
    ingredients:Ingredient[] = [
        new Ingredient('Apple', 5),
        new Ingredient('Tomatoes', 10),
      ];

      getIngredients(){
        return this.ingredients.slice();
      }

      addIngredient(ingredient: Ingredient){
        this.ingredients.push(ingredient);
        this.ingrdientsChanged.next(this.ingredients.slice());
      }
      addIngredients(ingredients: Ingredient []){
        this.ingredients.push(...ingredients);
        this.ingrdientsChanged.next(this.ingredients.slice());
      }

}
import {EventEmitter} from '@angular/core'
import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService{

    ingrdientsChanged = new EventEmitter<Ingredient[]>();
    
    ingredients:Ingredient[] = [
        new Ingredient('Apple', 5),
        new Ingredient('Tomatoes', 10),
      ];

      getIngredients(){
        return this.ingredients.slice();
      }

      addIngredient(ingredient: Ingredient){
        this.ingredients.push(ingredient);
        this.ingrdientsChanged.emit(this.ingredients.slice());
      }
      addIngredients(ingredients: Ingredient []){
        this.ingredients.push(...ingredients);
        this.ingrdientsChanged.emit(this.ingredients.slice());
      }

}
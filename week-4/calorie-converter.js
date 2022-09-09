/* 
 * ====================================
 * Title: calorie-converter.js
 * Author:  John Vanhessche
 * DAte: 2 September 2022
 * Description:  calorie-converter.js module for calorie.html 
 * ====================================
 */

//Adding an import statement to the FoodModel
import { FoodModel } from "./food-model.js";

//Creating a class called CalorieConverter with a static variable called data, and a static function, and exporting the class.  
export class CalorieConverter {

    //for the static variable we are populating it with 6 FoodModel objects with the values shown below.  the new keyword creates
    //the object.  Notice that data is actually an array [].
    static data = [
        new FoodModel(1007, "Egg", 78),
        new FoodModel(1008, "Apple", 95), 
        new FoodModel(1009, "Hamburger", 354), 
        new FoodModel(1010, "Fries", 400),
        new FoodModel(1011, "Banana", 105),
        new FoodModel(1012, "Soda", 150)    
    ];

    // Ok, I think I understand this function now.  originally I was trying to return a new array such as:
    //return newArr data.filter......  
    //Actually what this function is doing is returning the data array from above, but filtered for just the name of the food
    //item passed to it.  It's the same array, not a new array.  
    //This function returns the data array filtered for the food item passed to it.

    //creating a static function called find with a single string parameter (the name of the food item being passed to it).  
    //we are using the built in filter() method to return the data array with just the object matching the name parameter.
    //We're using the FoodModel name property to compare to the string parameter.  
    //We're essentially returning the data array, but in a filtered state. 
    static find(name) {        
        return this.data.filter(item => item.name.toLowerCase().includes(name));
    };
};




/* 
 * ====================================
 * Title: calorie-converter.js
 * Author:  John Vanhessche
 * DAte: 2 September 2022
 * Description:  calorie-converter.js module for calorie.html 
 * ====================================
 */

import { FoodModel } from "./food-model.js";

export class CalorieConverter {

    //I didn't know how to use the food-model class to populate this array, without getting syntax errors.  What do i need to do here?
    static data = [
        {id: 1007, name: "Egg", calories: 78},
        {id: 1008, name: "Apple", calories: 95}, 
        {id: 1009, name: "Hamburger", calories: 354}, 
        {id: 1010, name: "Fries", calories: 400},
        {id: 1011, name: "Banana", calories: 105},
        {id: 1012, name: "Soda", calories: 150}    
    ];

    // I don't think this is right either.  All I get is true or false being returned, and not the newArr.
    static find(string) {        
        return newArr = data.filter(string => string===data.name); 
                  
    };
}


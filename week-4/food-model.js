/* 
 * ====================================
 * Title: food-model.js
 * Author:  John Vanhessche
 * DAte: 1 September 2022
 * Description:  food-model.js module for calorie.html 
 * ====================================
 */


/*add per instructions.  
* Created class called FoodModel, with a constructor containing three parameters:  id, name, calories
* we're exporting the class using the export key word.
*/
export class FoodModel {
    constructor(id, name, calories) {
        this.id = id;
        this.name = name;
        this.calories = calories;
    }
};





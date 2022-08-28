/* 
 * ====================================
 * Title: index.js
 * Author:  John Vanhessche
 * DAte: 26 August 2022
 * Description:  index.js module for restaurant.html 
 * ====================================
 */

/*
*We need this file because of the way JS handles nested imports.  Per the explanation, since each of the modules are importing from the Product class
* meaning they all have the following:  import { Product } from "./product.js";.....will cause an error when trying to import these classes directly
*in the restaurant.html file.  So, we first export them from here, that way when we import into restaurant.html JS think the import is only one 
*level deep.  Not sure I quite understand fully why, but that's why we have this. 
*When we don't go this route - for instance we don't include the appetizer.js export 
*we get an UnCaught Syntax Error:  the requested module './index.js' does not provide an export named 'Appetizer" (at restaurant.html:122:33)
*/

export * from "./appetizer.js";
export * from "./beverage.js";
export * from "./dessert.js";
export * from "./main-course.js";
export * from "./bill.js";

/* 
 * ====================================
 * Title: beverage.js
 * Author:  John Vanhessche
 * DAte: 26 August 2022
 * Description:  beverage.js module for restaurant.html 
 * ====================================
 */


import { Product } from "./product.js";
/* Class creation, extending to Product class.  User super constructor to pass to product constructor. */

export class Beverage extends Product
{
    constructor(name, price)
    {
        super(name, price);
    }
}


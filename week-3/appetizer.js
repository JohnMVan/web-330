/* 
 * ====================================
 * Title: appetizer.js
 * Author:  John Vanhessche
 * DAte: 26 August 2022
 * Description:  appetizer.js module for restaurant.html 
 * ====================================
 */

import { Product } from "./product.js";

/* Class creation, extending to Product class.  User super constructor to pass to product constructor. */
export class Appetizer extends Product 
{
    constructor(name, price) 
    {
        super(name, price);
    }
};


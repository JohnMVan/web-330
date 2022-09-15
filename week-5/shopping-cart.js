/* 
 * ====================================
 * Title: shopping-cart.js
 * Author:  John Vanhessche
 * DAte: 9 September 2022
 * Description:  shpooing cart.js for bobs auto repair.
 * ====================================
 */

//need to use the Product model this class, therefore we extend Product and import the product.js file.
//import { Product } from "./product.js";

//Create a class named ShoppingCart and give it a constructor.
export class ShoppingCart {
    constructor()
    {
        //creating a class property called products and assigning it an empty array.
        this.products = [];
    }

    //create a function called add, that will add a Product object to the products array.
    //created this in two parts, first I created the object, then i pushed it to the array.

    add(product)     //passing a product object as the parameter. 
        {
            this.products.push(product);
        }

    count() 
        {
            return this.products.length;    //returning the length of the this.products property from line 18.
        } 
        
        *[Symbol.iterator]() 
        { 
            for(let product of this.products)     //looping over the product array on line 18.
            {
                yield product;      //returning each of the products produced by the for loop.
            }       
        }
}
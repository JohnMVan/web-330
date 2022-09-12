/* 
 * ====================================
 * Title: shopping-cart.js
 * Author:  John Vanhessche
 * DAte: 9 September 2022
 * Description:  shpooing cart.js for bobs auto repair.
 * ====================================
 */

//need to use the Product model this class, therefore we extend Product and import the product.js file.
import { Product } from "./product.js";

//Create a class named ShoppingCart and give it a constructor.
export class ShoppingCart extends Product {
    constructor()
    {
        //creating a property called products and assigning it an empty array.
        let products = [];

        //creating a function called caunt that will return the length of the products array.
        function count(products) 
        {
            return products.length;
        }
        
        //create a function called add, that will add a Product object to the products array.
        //created this in two parts, first I created the object, then i pushed it to the array.
        function add(item) 
        {
            let prod = new Product(item)
            products.push(prod);
        }

        //using JS iterators, create an iterator and in the body, use a for...of loop to loop over the product array
        //yield return each iterated product object.
        //I don't think this is setup correctly.  Not really sure what hes' asking on this.
        const it = iterator()   //getting an error here.
        
        function* iterator(products) 
        {
            for(let value of iterator)
            {
                yield value;
                value.next();
            }       
        }
        
    }
}
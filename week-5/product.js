/* 
 * ====================================
 * Title: product.js
 * Author:  John Vanhessche
 * DAte: 9 September 2022
 * Description:  product.js bobs auto repair 
 * ====================================
 */

/*
 *Creating a class named Product with two parameters: name and price.
 *Exporting class with export key word. 
 */

 export class Product 
 {
    constructor(name, price)
    {
        //setting class properties name and price.
        this.name = name;
        this.price = price; 
        
        //adding a new property called id, and assigning it a random number.         
        this.id = Math.random().toString(16).slice(2);       
    }    
 }
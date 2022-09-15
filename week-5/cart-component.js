/* 
 * ====================================
 * Title: cart-component.js
 * Author:  John Vanhessche
 * DAte: 8 September 2022
 * Description:  cart-component.js for bob auto repair 
 * ====================================
 */

//Create new class called CartCompnent that extends Javascript htlm element object

class CartComponent extends HTMLElement
{
    //Give the class a constructor and calling super() function for the HTML parent object
    constructor()
    {
        super();
    }
    
    //Add a function named Callback() and set the innerHTML to a string for the font awesome shopping cart

    connectedCallback()
    {
        this.innerHTML = `<i id="cartIcon" class="fa fa-shopping-cart"></i> (<span id="cart-count"></span>)`;
    }
}
//Outside the class declaration, call the customElements.define() function and pass in the string value cart-component,
//and the CartComponent class.
customElements.define("cart-component", CartComponent);         

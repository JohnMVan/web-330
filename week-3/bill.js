/* 
 * ====================================
 * Title: bill.js
 * Author:  John Vanhessche
 * DAte: 26 August 2022
 * Description:  bill.js module for restaurant.html 
 * ====================================
 */

export class Bill 
{
    /* declaring empty arrays that will be populated by the methods below, which will be triggered by the for/of loops on the html script area */
    _beverages = [];
    _appetizers = [];
    _mainCourses = [];
    _desserts = []

    /*
    *These methods are being accessed during the for/of block on the restaurant.html script area.  As each input field is examined, any item that is checked
    *is added to the appropriate array.  
    *Both name, and price are being pushed to the array as a new object (beverage, appetizer, etc).  
    *Name and price are coming from the input attributes.  
    */
    addBeverage(beverage)
    {
        this._beverages.push(beverage);
    }

    addAppetizer(appetizer)
    {
        this._appetizers.push(appetizer);
    }

    addMainCourse(mainCourse)
    {
        this._mainCourses.push(mainCourse);
    }

    addDessert(dessert)
    {
        this._desserts.push(dessert);
    }


    /*
    *The get total function calculates the total value of the bill.
    *the total variable is initiated.
    *Using the built-in forEach function, it parses through the individual arrays, totaling each objects price parameter to the variable total.
    *However, since the price is a text field, it first has to convert it to a float number using parseFloat function.  this way it can be added.
    *the total it returned to the calling function, expressed as a two digit value.  
    */    

    getTotal()
    {
        let total = 0;

        let beverageTotal = this._beverages.forEach(function(beverage)
        {
            total += parseFloat(beverage.price);
        })

        let appetizerTotal = this._appetizers.forEach(function(appetizer)
        {
            total += parseFloat(appetizer.price);
        })

        let mainCourseTotal = this._mainCourses.forEach(function(mainCourse)
        {
            total += parseFloat(mainCourse.price);
        })

        let dessertTotal = this._desserts.forEach(function(dessert)
        {
            total += parseFloat(dessert.price);
        })

        return total.toFixed(2);

    }  
}


/**
 * Title: float-field.js
 * Author:  John Vanhessche
 * Date:  17 September 2022
 * Desc: FloatField class for future value app
 */


export class FloatField 
{
    constructor(name, field) {
        this.name = name;
        this.field = field;
    }

    //this function validates the input from the user.  if it can parseFloat the data (meaning it's a number), then the function
    //returns true, otherwise it returns false indicating an input other than a number.  
    validate() {
        return (isNaN(parseFloat(this.field))) ? false: true;
    }

    //This is the message return in the instance of a false from the validate function.  it returns "[MonthlyPayment] or [Rate] or 
    //[Months] must be a float value.  you entered [user input].  if the user entered abc, then it would say "You entered abc".
    getMessage() {
        return `${this.name} must be a float value.  You entered ${this.field}`
    }
}
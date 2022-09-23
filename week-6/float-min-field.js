/**
 * Title: float-min-field.js
 * Author:  John Vanhessche
 * Date:  17 September 2022
 * Desc: FloatMinField class for future value app
 */


export class FloatMinField {
    constructor(name, field, min) {
        this.name = name;
        this.field = field;
        this.min = min;
    }

    //this function validates the input from the user.  It compares the user input to the min value.  if user input is more than min
    //parameter it returns true, otherwise it returns false
    validate() {
        return (parseFloat(this.field) > this.min) ? true: false;        
    }

    //error message if validate function returns false.
    getMessage() {
        return `${this.name} must be more than ${this.min}.  You entered ${this.field}`
    }
}
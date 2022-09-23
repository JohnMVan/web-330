/**
 * Title: float-max-field.js
 * Author:  John Vanhessche
 * Date:  17 September 2022
 * Desc: FloatMaxField class for future value app
 */


export class FloatMaxField {
    constructor(name, field, max) {
        this.name = name;
        this.field = field;
        this.max = max;
    }

    //this function validates the input from the user.  It compares the user input to the max value.  if user input is less than max
    //parameter it returns true, otherwise it returns false
    validate() {
        return (parseFloat(this.field) < this.max) ? true: false;
    }

    //error message generated if validate function returns false.
    getMessage() {
        return `${this.name} must be less than ${this.max}.  You entered ${this.field}`
    }
}
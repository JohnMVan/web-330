/**
 * Title: required-field.js
 * Author:  John Vanhessche
 * Date:  17 September 2022
 * Desc: RequiredField class for future value app
 */


//Checking for required fields.
export class RequiredField {

    constructor(name, field) {
        this.name = name;
        this.field = field;
    }

    validate() {

        //Returning true if this.field is a string, otherwise return false.
        return Boolean(this.field);
    }

    getMessage() {

        //checking for the presence of the name (monthly payment), and returning message if not found.
        return `${this.name} is a required field`
    }
}
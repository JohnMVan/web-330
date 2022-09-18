/**
 * Title: float-max-field.js
 * Author:  John Vanhessche
 * Date:  17 September 2022
 * Desc: FloatMaxField class for future value app
 */


export class FloatMaxField
{
    constructor(name, field, max)
    {
        this.name = name;
        this.field = field;
        this.max = max;
    }

    validate() 
    {
        return (parseFloat(this.field) < this.max) ? true: false;
    }

    getMessage() 
    {
        return `${this.name} must be less than ${this.max}.  You entered ${this.field}`
    }
}
/**
 * Title: float-min-field.js
 * Author:  John Vanhessche
 * Date:  17 September 2022
 * Desc: FloatMinField class for future value app
 */


export class FloatMinField 
{
    constructor(name, field, min)
    {
        this.name = name;
        this.field = field;
        this.min = min;
    }

    validate() 
    {
        return (parseFloat(this.field) > this.min) ? true: false;        
    }

    getMessage()
    {
        return `${this.name} must be more than ${this.min}.  You entered ${this.field}`
    }
}
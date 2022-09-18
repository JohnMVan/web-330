/**
 * Title: float-field.js
 * Author:  John Vanhessche
 * Date:  17 September 2022
 * Desc: FloatField class for future value app
 */


export class FloatField 
{
    constructor(name, field) 
    {
        this.name = name;
        this.field = field;
    }

    validate() 
    {
        return (isNaN(parseFloat(this.field))) ? false: true;
    }

    getMessage()
    {
        return `${this.name} must be a float value.  You entered ${this.field}`
    }
}
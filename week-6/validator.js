/**
 * Title: validator.js
 * Author:  John Vanhessche
 * Date:  17 September 2022
 * Desc: Validator class for future value app
 */

//Importing required classes, per instructions
import { RequiredField } from "./required-field.js";
import { FloatField } from "./float-field.js";
import { FloatMinField } from "./float-min-field.js";
import { FloatMaxField } from "./float-max-field.js";

//creating two empty arrays
export class Validator {
    validators = [];
    messages = [];

    constructor(name, field) {
        this.name = name;
        this.field = field;
    };
    
    //push methods to fill the arrays above
    addRequiredField() {
        this.validators.push(new RequiredField(this.name, this.field));
    };
    
    addRequiredFloatField() {
        this.validators.push(new FloatField(this.name, this.field));
    };

    addFloatMinField(min) {
        this.validators.push(new FloatMinField(this.name, this.field, min));
    };

    addFloatMaxField(max) {
        this.validators.push(new FloatMaxField(this.name, this.field, max));        
    };

    //validate function, accessing .getMessage functions somehow....not sure.
    validate() {
        for(let msg of this.validators) {
           if(msg.validate === "false") {
            this.msg.push(new msg.getMessage());
            return false;
           }            
        };
        return true;
    };
}



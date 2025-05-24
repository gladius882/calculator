import { Operator } from "./Operator.js";

export class Calculator {
    constructor() {
        this.currentValue = 0;
        this.operator = null;
    }

    calculateWith(number) {
        number = parseInt(number);
        console.log(`CALCULATE ${this.currentValue} ${this.operator} ${number}`)

        if(this.operator == Operator.PLUS) {
            this.currentValue+=number;
            this.operator = null;
        }

        if(this.operator == Operator.MINUS) {
            this.currentValue-=number;
            this.operator = null;
        }

        if(this.operator == Operator.MULTIPLY) {
            this.currentValue*=number;
            this.operator = null;
        }

        if(this.operator == Operator.DIVIDE) {
            this.currentValue/=number;
            this.operator = null;
        }


        return this.currentValue;
    }
}
import { Calculator } from "./js/Calculator.js";
import { Operator } from "./js/Operator.js";

const calculator = new Calculator();
const display = document.querySelector('input');

function appendDigit(digit) {
    display.value = display.value.toString() + digit
}


document.addEventListener('DOMContentLoaded', () => {

    let digits = document.querySelectorAll('.digit');
    digits.forEach((el) => {
        el.addEventListener('click', (e) => { 
            appendDigit(e.target.innerText) 
        })
    })
})

document.onkeyup = (event) => {

    let number = parseInt(event.key)

    if(!isNaN(number)) {
        appendDigit(event.key);
        return;
    }

    let key = event.key;
    if(key == "Enter") key = "=";

    if(key == "=" || key == "Enter") {
        console.log('calc');
        display.value = calculator.calculateWith(display.value);
        return;
    }

    if(Object.values(Operator).includes(key)) {
        console.log("Operator " + key);
        calculator.currentValue = parseInt(display.value);
        calculator.operator = key;
        display.value = "";
    }
}
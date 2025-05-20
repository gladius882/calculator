import { Calculator } from "./js/Calculator.js";

const calculator = new Calculator();
const display = document.querySelector('input');

function onDigitPress(e) {
    display.value = e.target.innerText;
}

document.addEventListener('DOMContentLoaded', () => {
    
    let digits = document.querySelectorAll('.digit');
    digits.forEach((el) => {
        el.addEventListener('click', onDigitPress)
    })
})
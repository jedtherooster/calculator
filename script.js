let num1 = 0;
let num2 = 0;
let operator = "";

const screenText = document.querySelector(".screen h2");
const clearButton = document.querySelector(".clear");

const operators = document.querySelectorAll(".operator");
operators.forEach((operator) => {
    operator.addEventListener("click", () => {
        operator.classList.add("clicked");
    })
});


const buttons = document.querySelectorAll(".button");
buttons.forEach((button) => {
    if (button.classList.contains("number")) {
        button.addEventListener("click", () => {
            console.log(button.id);
            operators.forEach((operator) => {
                if (operator.classList.contains("clicked")) {
                    operator.classList.remove("clicked");
                    clearScreen();
                }
            });
            screenText.textContent += button.id;
        });
    }
});



clearButton.addEventListener("click", clearScreen);


function clearScreen() {
    screenText.textContent = "";
    num1 = 0;
    num2 = 0;
    operator = "";
}

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function operate(num1, num2, operator) {
    switch (operator) {
        case "+":
            return add(num1, num2);
        case "-":
            return subtract(num1, num2);
        case "x":
            return multiply(num1, num2);
        case "/":
            return divide(num1, num2);
    }
}
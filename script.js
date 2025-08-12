let num1 = "";
let num2 = "";
let total = 0;
let selectedOperator = "";
let hasCalculated = false;

const screenText = document.querySelector(".screen h2");
const clearButton = document.querySelector(".clear");
const equalsButton = document.querySelector(".equals");

const operators = document.querySelectorAll(".operator");
operators.forEach((operator) => {
    operator.addEventListener("click", () => {
        console.log(operator.textContent);
        selectedOperator = operator.textContent;
        operator.classList.add("clicked");
    });
});


const buttons = document.querySelectorAll(".button");
buttons.forEach((button) => {
    if (button.classList.contains("number")) {
        button.addEventListener("click", () => {
            if (hasCalculated) {
                clearScreen();
            } 
            console.log(button.id);
            operators.forEach((operator) => {
            if (operator.classList.contains("clicked")) {
                operator.classList.remove("clicked");
                screenText.textContent = "";
            }
        });
            if (selectedOperator === "") {
                num1 += button.id;
                screenText.textContent = num1;
            } else {
                num2 += button.id;
                screenText.textContent = num2;
                previewCalculate();
            }
            

            
            
        });
    }
});


clearButton.addEventListener("click", clearScreen);

equalsButton.addEventListener("click", finalCalculate);

function previewCalculate() {
    if (num1 !== "" && num2 !== "") {
        total = operate(+num1, +num2, selectedOperator);
    }
}

function finalCalculate() {
   previewCalculate();
   num1 = total;
   num2 = "";
   screenText.textContent = total;
   selectedOperator = "";
   hasCalculated = true;
}


function clearScreen() {
    screenText.textContent = "";
    num1 = "";
    num2 = "";

    total = "";
    selectedOperator = "";
    hasCalculated = false;
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
    return Math.round((num1 / num2) * 100) / 100;
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
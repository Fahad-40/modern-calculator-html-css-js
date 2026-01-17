let previousInput = "";
let currentOperation = "";
let currentInput = "";

// Step 1 and then 3 : Appending numbers and saving in Current Input
function appendNumber(number) {
    currentInput = currentInput + number;
    document.querySelector("#display").value = `${previousInput} ${currentOperation} ${currentInput}`;  
}

// //Step 2: Append Operation
function appendOperation(operation) {
    if (currentInput == "") {
        return;
    }

    previousInput = currentInput;
    currentOperation = operation;
    currentInput = "";
    document.querySelector("#display").value = `${previousInput} ${currentOperation}`;  
}

// //CALCULATION

function calculate() {
    if (previousInput == "" || currentInput == "") {
        return;
    }
let result;
    let prev = parseFloat(previousInput);
    let current = parseFloat(currentInput);

switch (currentOperation) {
        case "+":
            result = prev + current;
            break;
        case "-":
            result = prev - current;
            break;
        case "*":
            result = prev * current;
            break;
        case "/":
            if (current === 0) {
                alert("Cannot divide by zero");
            }
            result = prev / current;
            break;

        default:
            break;
    }

    let newResult = result.toString();
document.querySelector("#display").value = newResult;
}

function clearDisplay() {

    currentInput = "";
    previousInput = "";
    currentOperation = "";

    document.querySelector("#display").value = "";
}

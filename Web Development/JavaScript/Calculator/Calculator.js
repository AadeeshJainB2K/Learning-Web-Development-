// Defining Variables

let firstOperand;
let secondOperand;
let Operation;
let result;

// Taknig Input Form The User

firstOperand = parseFloat(prompt("Enter First Operand"));
Operation = prompt("Enter The Opreation You Want To Peform (+,-,*,/)");
secondOperand = parseFloat(prompt("Enter Second Operand"));

// Main Logic

if (Operation == "+") {
  result = firstOperand + secondOperand;
} else if (Operation == "-") {
  result = firstOperand - secondOperand;
} else if (Operation == "*") {
  result = firstOperand * secondOperand;
} else if (Operation == "/") {
  result = firstOperand / secondOperand;
} else if (Operation == "") {
  result = firstOperand / secondOperand;
} else {
  alert(
    "Given Information Is Incomplete Or Incorrect Refresh Page To Re-Enter Data"
  );
}

// Result

console.log(firstOperand, Operation, secondOperand, "=", result);

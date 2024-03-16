alert("This is a Calculator");
let result;
const opreation = parseFloat(prompt("Enter The Operation"));
const firstNumber = prompt("Enter The First Operand");
const secondNumber = parseFloat(prompt("Enter The Second Operand"));

if (opreation == "+") {
  result = firstNumber + secondNumber;
}

console.log(result);

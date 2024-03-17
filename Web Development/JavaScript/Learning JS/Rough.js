// Defining The Varialbles
let a;
let b;
let c;
// Taking Input
a = parseFloat(prompt("Enter First Number"));
b = prompt("Enter The Opreation");
c = parseFloat(prompt("Enter First Number"));
// creating Logic
if (b == "+") {
  console.log(a + c);
} else if (b == "-") {
  console.log(a - c);
} else if (b == "*") {
  console.log(a * c);
} else if (b == "/") {
  console.log(a / c);
}

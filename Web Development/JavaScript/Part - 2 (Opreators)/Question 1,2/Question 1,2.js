let number = prompt("Enter a Munber Here To Check If It Is A Multiple Of 5");
let finalNumber = number % 5;
if (finalNumber === 0) {
  console.log(number, " is a multiple of 5");
} else if (finalNumber === !0) {
  console.log(number, "is not a multiple of 5");
} else {
  throw ("!!! Error !!! ", "The Number You Have Enetrd Is Not A Valid Number");
}

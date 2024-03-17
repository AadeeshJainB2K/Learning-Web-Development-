let number = parseFloat(
  prompt(
    "Enter A Number To Calculate The Sum Of 1 to The Number You Have Entered"
  )
);

let Result;

for (Result = 1; Result <= number; Result++) {
  Result = Result + number;
}
console.log(Result);

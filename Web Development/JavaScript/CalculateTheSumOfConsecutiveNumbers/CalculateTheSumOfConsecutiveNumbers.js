let sum = 0;
let Number = parseFloat(
  prompt(
    "Enter Any Numbr=er To Check Its Consecutive Sum Form 1 In The Console"
  )
);
for (let i = 0; i <= Number; i++) {
  sum = sum + i;
}
console.log(sum);

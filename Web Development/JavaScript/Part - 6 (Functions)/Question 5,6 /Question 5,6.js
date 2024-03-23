// let usersNumber = parseFloat(prompt("Enter A "));
let usersNumber = 5;
let counting = [];
for (i = 1; i <= usersNumber; i++) {
  counting.push(i);
}
let sum = counting.reduce((result, current) => {
  return result + current;
});
console.log("Sum of All numbers is = ", sum);
let product = counting.reduce((result, current) => {
  return result * current;
});
console.log("Product Of All Numbers is = ", product);

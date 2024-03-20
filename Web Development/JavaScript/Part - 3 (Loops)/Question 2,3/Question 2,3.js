let rightNumber = 25;
let usersNumber = parseFloat(prompt("Guess The Correct Number ?"));
for (i = 1; usersNumber !== rightNumber; i = i) {
  if (usersNumber !== rightNumber) {
    alert("Try Again");
    usersNumber = parseFloat(prompt("Guess The Correct Number ?"));
  }
}
if (usersNumber == rightNumber) {
  alert("You Guessed It Right");
}

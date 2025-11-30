let gameNumber = 5;
let usersNumber = null;
usersNumber = parseInt(prompt("Guess the game number"));
while (gameNumber != usersNumber) {
  usersNumber = parseInt(prompt("Hard luck again guess the game number"));
}
alert("You Guessed it right");

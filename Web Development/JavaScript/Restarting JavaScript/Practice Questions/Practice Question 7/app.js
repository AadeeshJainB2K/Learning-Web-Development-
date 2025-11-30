let gameNumber = 5;
let usersNumber = null;

// Initial prompt to get the first guess
usersNumber = parseInt(prompt("Guess the game number:"));

// Loop until the user guesses the correct number
while (gameNumber != usersNumber) {
  usersNumber = parseInt(prompt("Hard luck! Guess again:"));
}
alert("You Guessed it right");

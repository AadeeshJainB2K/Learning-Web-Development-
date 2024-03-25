let usersScore = 0;

let machinesScore = 0;

let usersChoice;

let options = ["stone", "paper", "scissors"];

let availableChoices = document.querySelectorAll(".Options");

let message = document.querySelector("#message");

let btn = document.querySelector("#messageBox");

let usersScorePara = document.querySelector("#UsersScore");

let machinesScorePara = document.querySelector("#ComputersScore");

usersScorePara.innerText = usersScore;

machinesScorePara.innerText = machinesScore;

let machinesChoiceGenerator = () => {
  let index = Math.floor(Math.random() * 3);
  return options[index];
};

let machinesChoice;

usersChoice = availableChoices.forEach((choice) => {
  choice.addEventListener("click", () => {
    usersChoice = choice.getAttribute("id");
    machinesChoice = machinesChoiceGenerator();
    if (usersChoice === machinesChoice) {
      message.innerText = "Its a Draw . You Both Chose The Same .";
      btn.setAttribute("class", "Draw sparkleChange");
    } else if (usersChoice === "stone" && machinesChoice === "scissors") {
      message.innerText = "You Won . Your Stone Beats Scissors";
      btn.setAttribute("class", "YouWon sparkleChange");
      usersScore++;
      usersScorePara.innerText = usersScore;
    } else if (usersChoice === "stone" && machinesChoice === "paper") {
      message.innerText = "You Lost . Paper Beats Your Rock";
      btn.setAttribute("class", "YouLost sparkleChange");
      machinesScorePara.innerText = machinesScore;
      machinesScore++;
    } else if (usersChoice === "scissors" && machinesChoice === "paper") {
      message.innerText = "You Won . Your Scissors Beats Paper";
      btn.setAttribute("class", "YouWon sparkleChange");
      usersScore++;
      usersScorePara.innerText = usersScore;
    } else if (usersChoice === "scissors" && machinesChoice === "stone") {
      message.innerText = "You Lost . Stone Beats Your Scissors";
      btn.setAttribute("class", "YouLost sparkleChange");
      machinesScorePara.innerText = machinesScore;
      machinesScore++;
    } else if (usersChoice === "paper" && machinesChoice === "stone") {
      message.innerText = "You Won . Your Paper Beats Stone";
      btn.setAttribute("class", "YouWon sparkleChange");
      usersScore++;
      usersScorePara.innerText = usersScore;
    } else if (usersChoice === "paper" && machinesChoice === "scissors") {
      message.innerText = "You Lost . Scissors Beats Your Paper";
      btn.setAttribute("class", "YouLost sparkleChange");
      machinesScorePara.innerText = machinesScore;
      machinesScore++;
    }
    return choice.getAttribute("id");
  });
});

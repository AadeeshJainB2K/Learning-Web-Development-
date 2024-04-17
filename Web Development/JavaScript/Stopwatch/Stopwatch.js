let [hours, minutes, seconds, miliseconds] = ["00 ", ": 00 ", ": 00 ", ": 000"];

let timerDisplay = document.querySelector("#timerDisplay");

let startbtn = document.querySelector("#startTimer");

timerDisplay.innerText = [hours, minutes, seconds, miliseconds];

function startTime() {
  miliseconds++;
  if (miliseconds == 999) {
    seconds++;
  }
  timerDisplay.innerText = "working";
}

startbtn.addEventListener("click", startTime());

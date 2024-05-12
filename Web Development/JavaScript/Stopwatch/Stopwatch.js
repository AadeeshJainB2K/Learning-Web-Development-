let [hours, minutes, seconds, miliseconds] = [0, 0, 0, 0];

let timerDisplay = document.querySelector("#timerDisplay");

let startBtn = document.querySelector("#startTimer");

let resetBtn = document.querySelector("#resetTimer");

timerDisplay.innerText = `${hours} : ${minutes} : ${seconds} : ${miliseconds}`;

function functionality() {
  setInterval(() => {
    miliseconds++;
    timerDisplay.innerText = `${hours} : ${minutes} : ${seconds} : ${miliseconds}`;
    if (miliseconds >= 99) {
      seconds++;
      miliseconds = 0;
    }
  }, 1);
}
resetBtn.click(functionality());

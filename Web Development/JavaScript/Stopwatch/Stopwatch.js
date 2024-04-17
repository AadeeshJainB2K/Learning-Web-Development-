let [hours, minutes, second, miliseconds] = [0, 0, 0, 0];

let timerDisplay = document.querySelector("#timerDisplay");

let startBtn = document.querySelector("#startTimer");

let resetBtn = document.querySelector("#resetTimer");

timerDisplay.innerText = `${hours} : ${minutes} : ${second} : ${miliseconds}`;

function stopWatch() {
  setInterval(() => {
    miliseconds++;
    if (miliseconds == 999) {
      seconds++;
      miliseconds = 0;
    }
    timerDisplay.innerText = `${hours} : ${minutes} : ${second} : ${miliseconds}`;
  }, 1);
}

resetBtn.click(stopWatch());

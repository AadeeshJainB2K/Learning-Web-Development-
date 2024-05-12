let [hours, minutes, seconds, miliseconds] = [0, 0, 0, 0];

let timerDisplay = document.querySelector("#timerDisplay");

let startBtn = document.querySelector("#startTimer");

let resetBtn = document.querySelector("#resetTimer");

let stopBtn = document.querySelector("#stopTimer");

let interval = null;

timerDisplay.innerText = `${padTime(hours)} : ${padTime(minutes)} : ${padTime(
  seconds
)} : ${miliseconds / 100}0`;

function padTime(time) {
  return time < 10 ? `0${time}` : time;
}

function functionality() {
  if (interval) return;

  interval = setInterval(() => {
    miliseconds += 100;

    if (miliseconds > 999) {
      seconds++;
      miliseconds = 0;
    }
    if (seconds >= 60) {
      minutes++;
      seconds = 0;
    }
    if (minutes >= 60) {
      hours++;
      minutes = 0;
    }
    timerDisplay.innerText = `${padTime(hours)} : ${padTime(
      minutes
    )} : ${padTime(seconds)} : ${miliseconds / 100}0`;
  }, 100);
}

startBtn.addEventListener("click", functionality);

stopBtn.addEventListener("click", () => {
  if (interval) clearInterval(interval);

  // Reset the value of interval variable so that we can check the value in functionality function to handle multiple start clicks
  interval = null;
});

resetBtn.addEventListener("click", () => {
  if (interval) clearInterval(interval);
  interval = null;

  [hours, minutes, seconds, miliseconds] = [0, 0, 0, 0];
  timerDisplay.innerText = `${padTime(hours)} : ${padTime(minutes)} : ${padTime(
    seconds
  )} : ${padTime(miliseconds)}`;
});

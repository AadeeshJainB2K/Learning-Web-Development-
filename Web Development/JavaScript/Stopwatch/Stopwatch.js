let [hours, minutes, seconds, miliseconds] = [0, 0, 0, 0];

let timerDisplay = document.querySelector("#timerDisplay");

let startBtn = document.querySelector("#startTimer");

let resetBtn = document.querySelector("#resetTimer");

timerDisplay.innerText = `${padTime(hours)} : ${padTime(minutes)} : ${padTime(
  seconds
)} : ${padTime(miliseconds)}`;

function padTime(time) {
  return time < 10 ? `0${time}` : time;
}

function functionality() {
  setInterval(() => {
    miliseconds++;
    timerDisplay.innerText = `${padTime(hours)} : ${padTime(
      minutes
    )} : ${padTime(seconds)} : ${padTime(miliseconds)}`;

    if (miliseconds >= 99) {
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
  }, 1);
}

startBtn.addEventListener("click", functionality);

stopBtn.addEventListener("click", () => {
  clearInterval(functionality);
});

resetBtn.addEventListener("click", () => {
  clearInterval(functionality);
  [hours, minutes, seconds, miliseconds] = [0o0, 0o0, 0o0, 0o0];
  timerDisplay.innerText = `${padTime(hours)} : ${padTime(minutes)} : ${padTime(
    seconds
  )} : ${padTime(miliseconds)}`;
});

let body = document.querySelector("body");
let button = document.querySelector("#modeSwitcher");
let para = document.querySelector("#lorem");
let currentMode = "light";

let darkMode = () => {
  body.style.backgroundColor = "black";
  para.style.color = "white";
  button.style.backgroundColor = "black";
  button.style.color = "white";
};

let lightMode = () => {
  body.style.backgroundColor = "white";
  para.style.color = "black";
  button.style.backgroundColor = "white";
  button.style.color = "black";
};

button.addEventListener("click", () => {
  if (currentMode === "light") {
    darkMode();
    currentMode = "dark";
  } else if (currentMode === "dark") {
    lightMode();
    currentMode = "light";
  }
});

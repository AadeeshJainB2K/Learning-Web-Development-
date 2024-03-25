let button = document.createElement("button");
button.innerText = "ClickMe!";
button.style.backgroundColor = "red";
button.style.color = "blue";
let paragraph = document.querySelector("p");
paragraph.prepend(button);
button.addEventListener("click", () => {
  console.log("you clicked");
});
button.addEventListener("click", () => {
  console.log("you clicked by callback 2");
});
button.removeEventListener("click", () => {
  console.log("you clicked by callback 2");
});

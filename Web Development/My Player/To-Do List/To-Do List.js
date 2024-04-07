let btn = document.querySelector("#button");

let input = document.querySelector("#input");

let listField = document.querySelector("#taskText");

input.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    btn.click();
  }
});

function addTask() {
  let li = document.createElement("li");
  li.innerText = input.value;
  listField.appendChild(li);
  let crossIcon = document.createElement("span");
  crossIcon.innerText = "⨯";
  li.appendChild(crossIcon);
  input.value = "";
}

btn.addEventListener("click", () => {
  if (input.value === " ") {
    alert("You Are Supposed To Write Something !");
  }
  addTask();
});

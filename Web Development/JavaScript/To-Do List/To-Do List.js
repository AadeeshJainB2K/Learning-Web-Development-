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
  let mainLi = document.createElement("li");
  let listContainer = document.createElement("div");
  let listContainerFirst = document.createElement("div");
  let uncheckedImg = document.createElement("img");
  let task = document.createElement("p");
  let crossSymbol = document.createElement("span");
  listContainerFirst.classList.add("listContainerFirst");
  mainLi.append(listContainerFirst);
  task.innerText = input.value;
  uncheckedImg.classList.add("uncheckedImg");
  uncheckedImg.src = "unchecked.png";
  listContainer.classList.add("listContainer");
  listField.appendChild(mainLi);
  mainLi.appendChild(listContainer);
  listContainerFirst.appendChild(uncheckedImg);
  listContainerFirst.appendChild(task);
  crossSymbol.innerHTML = "&#10005;";
  crossSymbol.classList.add("cross");
  listContainer.appendChild(crossSymbol);
  input.value = "";
}

btn.addEventListener("click", () => {
  if (input.value === "") {
    alert("You Are Supposed To Write Something !");
  } else if (input.value === " ") {
    alert("You Are Supposed To Write Something !");
  } else {
    addTask();
  }
});

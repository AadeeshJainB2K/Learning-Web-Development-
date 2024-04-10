import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

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
  let task = document.createElement("p");
  let crossSymbol = document.createElement("span");
  listContainerFirst.classList.add("listContainerFirst");
  mainLi.append(listContainerFirst);
  mainLi.classList.add("mainLi");
  task.innerText = input.value;
  listContainer.classList.add("listContainer");
  listField.appendChild(mainLi);
  mainLi.appendChild(listContainer);
  listContainerFirst.appendChild(task);
  crossSymbol.innerHTML = "&#10005;";
  crossSymbol.classList.add("cross");
  listContainer.appendChild(crossSymbol);
  listContainer.addEventListener("click", (event) => {
    const target = event.target;
    if (target.tagName === "SPAN") {
      mainLi.remove();
    }
  });
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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

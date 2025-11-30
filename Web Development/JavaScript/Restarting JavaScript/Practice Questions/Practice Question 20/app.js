const btn = document.createElement("button");

btn.innerText = "Click Me !";

btn.classList.add("bg-red-500", "text-white", "px-4", "py-2", "rounded");

const body = document.querySelector("body");

body.prepend(btn);

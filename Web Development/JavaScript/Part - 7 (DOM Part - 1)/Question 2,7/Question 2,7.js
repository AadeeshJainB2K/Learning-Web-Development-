let divs = document.querySelectorAll(".box");
let i = 1;
for (div of divs) {
  div.innerText = `Unique Div ${i}`;
  i++;
}

let factBox = document.querySelector("#Fact");
let button = document.querySelector("#btn");
let randomIndexGenerator = () => {
  let index = Math.floor(Math.random() * 5);
  return index;
};
const getFacts = async () => {
  let catFactsAPI = "https://cat-fact.herokuapp.com/facts";
  let fetchedData = await fetch(catFactsAPI);
  let usableData = await fetchedData.json();
  factBox.innerText = usableData[randomIndexGenerator()].text;
};
button.addEventListener("click", () => {
  getFacts();
});

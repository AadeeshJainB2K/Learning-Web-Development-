const catFacts = "https://cat-fact.herokuapp.com/facts";

let btn = document.querySelector("#btn");

let factText = document.querySelector("#Fact");

const getFacts = async () => {
  const catFacts = "https://cat-fact.herokuapp.com/facts";
  let fact = await fetch(catFacts);
  let data = await fact.json();
  btn.addEventListener("click", () => {
    let randomIndexGenerator = () => {
      let index = Math.floor(Math.random() * 5);
      return index;
    };
    factText.innerText = data[randomIndexGenerator()].text;
  });
  console.log(data);
};

getFacts();

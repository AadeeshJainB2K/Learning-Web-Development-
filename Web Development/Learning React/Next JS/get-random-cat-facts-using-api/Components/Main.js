import React, { useState } from "react";

const Main = () => {
  const [fact, setfact] = useState([]);
  const getCatFacts = async () => {
    const catFacts = "https://cat-fact.herokuapp.com/facts";
    const data = await (await fetch(catFacts)).json();
    let getRandomIndex = () => {
      return Math.floor(Math.random() * 5);
    };
    console.log(data[getRandomIndex()]);
    let fact = data[getRandomIndex()];
    setfact(fact.text);
  };

  return (
    <>
      <main>
        <section id="OptionsSection">
          <p id="Fact">{fact}</p>
        </section>
        <section id="PickBtnSection">
          <button id="btn" onClick={getCatFacts}>
            <b>Get a Random Cat Fact</b>
          </button>
        </section>
      </main>
    </>
  );
};

export default Main;

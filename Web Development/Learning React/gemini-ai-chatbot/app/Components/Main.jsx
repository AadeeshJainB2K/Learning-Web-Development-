import axios from "axios";
import React, { useEffect, useState } from "react";

const MainApp = () => {
  const [prompt, setprompt] = useState("");
  const [answer, setanswer] = useState("");

  useEffect(() => {
    const btn = document.querySelector("#btn");
    const input = document.querySelector("#promptInput");
    input.addEventListener("keypress", function (event) {
      if (event.key === "Enter") {
        event.preventDefault();
        btn.click();
      }
    });
  });

  const getResponse = async (props) => {
    setanswer("Loading....");
    const response = await axios({
      url: "",
      method: "post",
      data: { contents: [{ parts: [{ text: prompt }] }] },
    });
    const answer =
      response["data"]["candidates"][0]["content"]["parts"][0]["text"];
    setanswer(answer);
    console.log(answer);
  };
  return (
    <>
      <main>
        <section id="inputField">
          <input
            type="text"
            id="promptInput"
            placeholder="Enter a prompt"
            autoComplete="off"
            value={prompt}
            onChange={(a) => {
              setprompt(a.target.value);
            }}
          />
          <button id="btn" onClick={getResponse}>
            <i class="fa-solid fa-arrow-up-from-bracket"></i>
          </button>
        </section>
        <section id="resultArea">
          <p id="result">{answer}</p>
        </section>
      </main>
    </>
  );
};
export default MainApp;

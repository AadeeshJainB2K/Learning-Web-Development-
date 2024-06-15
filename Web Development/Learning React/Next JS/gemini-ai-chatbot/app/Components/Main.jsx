//Owner - Aadeesh Jain

import React, { useEffect, useState } from "react";
import axios from "axios";

const MainApp = (props) => {
  const [prompt, setprompt] = useState("");
  const [answer, setanswer] = useState("");

  const GEMINI_API_KEY = props.GEMINI_API_KEY;

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

  const getResponse = async () => {
    setanswer("Loading....");
    const response = await axios({
      url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${GEMINI_API_KEY}`,
      method: "post",
      data: { contents: [{ parts: [{ text: prompt }] }] },
    });

    const answer = await response["data"]["candidates"][0]["content"][
      "parts"
    ][0]["text"];
    await setanswer(answer);
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
            <i className="fa-solid fa-arrow-up-from-bracket"></i>
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
//Owner - Aadeesh Jain

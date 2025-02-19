import React, { useEffect, useState } from "react";
import axios from "axios";

const MainApp = () => {
  const [prompt, setPrompt] = useState("");
  const [answer, setAnswer] = useState("");
  const LLAMA_API_URL = "http://localhost:11434/api/chat";

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === "Enter") {
        event.preventDefault();
        document.querySelector("#btn").click();
      }
    };

    const inputElement = document.querySelector("#promptInput");
    inputElement.addEventListener("keypress", handleKeyPress);
    return () => inputElement.removeEventListener("keypress", handleKeyPress);
  }, []);

  const fetchLlamaResponse = async () => {
    try {
      const startTime = performance.now();
      const response = await axios.post(LLAMA_API_URL, {
        model: "llama3",
        messages: [{ role: "user", content: prompt }],
        stream: false,
      });
      return {
        model: "LLaMA 3",
        text: response.data.message.content,
        time: performance.now() - startTime,
      };
    } catch (error) {
      console.error("LLaMA API Error:", error);
      return null;
    }
  };

  const getResponse = async () => {
    setAnswer("Loading...");
    try {
      const result = await fetchLlamaResponse();
      if (result) {
        setAnswer(`${result.text} \n\n(${result.model})`);
      } else {
        setAnswer("Failed to fetch response.");
      }
    } catch (error) {
      console.error("Unexpected Error:", error);
      setAnswer("Failed to fetch response.");
    }
  };

  return (
    <>
      <main style={{ position: "relative", minHeight: "100vh" }}>
        <section id="inputField">
          <input
            type="text"
            id="promptInput"
            placeholder="Enter a prompt"
            autoComplete="off"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          />
          <button
            id="btn"
            onClick={getResponse}
            style={{
              backgroundColor: "red",
              transition: "background-color 0.3s ease",
              boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.2)",
            }}
            onMouseDown={(e) => (e.target.style.cursor = "grabbing")}
            onMouseUp={(e) => (e.target.style.cursor = "grab")}
          >
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

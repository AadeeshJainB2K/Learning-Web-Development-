import React, { useEffect, useState } from "react";
import axios from "axios";

const MainApp = ({ GEMINI_API_KEY }) => {
  const [prompt, setPrompt] = useState("");
  const [answer, setAnswer] = useState("");
  const [useLlama, setUseLlama] = useState(true);
  const LLAMA_API_URL = "http://localhost:11434/api/chat";

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === "Enter") {
        event.preventDefault();
        document.querySelector("#btn").click();
      }
    };

    document
      .querySelector("#promptInput")
      .addEventListener("keypress", handleKeyPress);
    return () =>
      document
        .querySelector("#promptInput")
        .removeEventListener("keypress", handleKeyPress);
  }, []);

  const fetchLlamaResponse = async () => {
    if (!useLlama) return null;
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
  };

  const fetchGeminiResponse = async () => {
    const startTime = performance.now();
    const response = await axios.post(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${GEMINI_API_KEY}`,
      { contents: [{ parts: [{ text: prompt }] }] }
    );
    return {
      model: "Gemini",
      text: response.data.candidates[0].content.parts[0].text,
      time: performance.now() - startTime,
    };
  };

  const getResponse = async () => {
    setAnswer("Loading...");

    const requests = [fetchGeminiResponse()];
    if (useLlama) requests.push(fetchLlamaResponse());

    Promise.allSettled(requests).then((results) => {
      const validResponses = results
        .filter((res) => res.status === "fulfilled" && res.value)
        .map((res) => res.value);
      validResponses.sort((a, b) => a.time - b.time);

      if (validResponses.length > 0) {
        setAnswer(`${validResponses[0].text} \n\n(${validResponses[0].model})`);
        if (validResponses.length > 1) {
          setTimeout(() => {
            setAnswer(
              (prev) =>
                `${prev}\n\n${validResponses[1].text} \n\n(${validResponses[1].model})`
            );
          }, 500);
        }
      } else {
        setAnswer("Failed to fetch response.");
      }
    });
  };

  return (
    <>
      <main style={{ position: "relative", minHeight: "100vh" }}>
        <div
          style={{
            position: "fixed",
            top: "10px",
            right: "10px",
            zIndex: 10000,
            background: "white",
            padding: "5px",
            borderRadius: "5px",
            boxShadow: "0 0 5px rgba(0,0,0,0.3)",
          }}
        >
          <button
            onClick={() => setUseLlama(!useLlama)}
            style={{
              padding: "10px 16px",
              backgroundColor: useLlama ? "red" : "green",
              color: "white",
              border: "none",
              borderRadius: "50%",
              cursor: "pointer",
              fontSize: "100%",
              fontWeight: "bold",
              boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.2)",
              width: "40px", // Adjust the size to make it a small circle
              height: "40px", // Ensure it's perfectly round
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {useLlama ? "Disable LLaMA" : "Enable LLaMA"}
          </button>
        </div>

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
              width: "50px", // Small circle
              height: "50px", // Small circle
              borderRadius: "50%", // Make it circular
              backgroundColor: useLlama ? "red" : "#4CAF50", // Color changes based on LLaMA state
              color: "white",
              border: "none",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "20px",
              cursor: "pointer", // Ensures fist cursor on hover
              boxShadow: "0 2px 5px rgba(0, 0, 0, 0.3)",
              transition: "background-color 0.3s ease",
            }}
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

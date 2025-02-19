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

    const inputElement = document.querySelector("#promptInput");
    inputElement.addEventListener("keypress", handleKeyPress);
    return () => inputElement.removeEventListener("keypress", handleKeyPress);
  }, []);

  const fetchLlamaResponse = async () => {
    if (!useLlama) return null;
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

  const fetchGeminiResponse = async () => {
    try {
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
    } catch (error) {
      console.error("Gemini API Error:", error);
      return null;
    }
  };

  const getResponse = async () => {
    setAnswer("Loading...");
    try {
      const requests = [fetchGeminiResponse()];
      if (useLlama) requests.push(fetchLlamaResponse());

      Promise.allSettled(requests)
        .then((results) => {
          console.log("API Responses:", results);
          const validResponses = results
            .filter((res) => res.status === "fulfilled" && res.value)
            .map((res) => res.value);
          validResponses.sort((a, b) => a.time - b.time);

          if (validResponses.length > 0) {
            setAnswer(
              `${validResponses[0].text} \n\n(${validResponses[0].model})`
            );
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
        })
        .catch((error) => {
          console.error("Error in API Requests:", error);
          setAnswer("Failed to fetch response.");
        });
    } catch (error) {
      console.error("Unexpected Error:", error);
      setAnswer("Failed to fetch response.");
    }
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
              width: "100%",
              height: "100%",
              borderRadius: "50%",
              backgroundColor: useLlama ? "red" : "green",
              color: "white",
              border: "none",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "12px",
              fontWeight: "bold",
              boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.2)",
              cursor: "pointer",
              transition: "background-color 0.3s ease",
            }}
          >
            {useLlama ? "❌" : "✔"}
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
              backgroundColor: useLlama ? "red" : "#4CAF50",
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

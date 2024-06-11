import React from "react";

const MainApp = () => {
  return (
    <>
      <div id="app">
        <div id="header" className="inconsolata">
          <h2>A.I Chatbot</h2>
        </div>
        <div id="main">
          <div id="inputField" className="inconsolata">
            <input
              type="text"
              placeholder="Enter a prompt"
              id="input"
              className="inconsolata"
            />
            <button id="button" className="inconsolata">
              <i class="fa-solid fa-arrow-up-from-bracket"></i>
            </button>
          </div>
          <div id="taskField">
            <ul id="taskText"></ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainApp;

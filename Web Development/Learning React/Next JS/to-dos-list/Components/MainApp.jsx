import React from "react";

const MainApp = () => {
  return (
    <>
      <div id="app">
        <div id="header">
          <h2>To-Do List</h2>
          <img src="icon.png" alt="notebook" id="icon" />
        </div>
        <div id="main">
          <div id="inputField">
            <input type="text" placeholder="Add a task" id="input" />
            <button id="button">Add</button>
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

"use client";
import React, { useState } from "react";
import { useEffect } from "react";
const Form = () => {
  const [Task, setTask] = useState("");
  const [Description, setDescription] = useState("");
  useEffect(() => {
    const btn = document.querySelector("#btn");
    const input = document.querySelector("#Description");
    input.addEventListener("keypress", function (event) {
      if (event.key === "Enter") {
        event.preventDefault();
        btn.click();
      }
    });
  });
  return (
    <>
      <form className="h-16 flex justify-center items-center">
        <input
          type="text"
          placeholder="Enter Your Task Here"
          className="px-4 rounded-x h-8 border-2 border-zinc-700 rounded m-3"
          autoComplete="off"
          value={Task}
          onChange={(e) => {
            setTask(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Enter Task Description Here"
          className="w-52 px-4 rounded-x h-8 border-2 border-zinc-700 rounded m-3"
          id="Description"
          autoComplete="off"
          value={Description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
        <button
          id="btn"
          className="px-4 rounded-x h-8 border-2 border-zinc-700 rounded m-3 bg-gray-800 text-slate-50"
        >
          Add Task
        </button>
      </form>
    </>
  );
};

export default Form;

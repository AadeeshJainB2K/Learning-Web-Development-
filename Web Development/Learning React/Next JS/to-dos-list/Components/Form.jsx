"use client";
import React, { useState } from "react";
import { useEffect } from "react";
const Form = () => {
  const [Task, setTask] = useState("");
  const [Description, setDescription] = useState("");
  const [mainTask, setmainTask] = useState([]);

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

  const submitHandler = (e) => {
    e.preventDefault();
    setmainTask([...mainTask, { task, description }]);
    setTask("");
    setDescription("");
    console.log(mainTask);
  };

  let renderTask = <h2>Task Not Available</h2>;

  renderTask = () => {
    mainTask.map((t, i) => {
      return (
        <>
          <div className="flex">
            <h5>{t.task}</h5>
            <h6>{t.description}</h6>
          </div>
        </>
      );
    });
  };

  return (
    <>
      <form
        className="h-16 flex justify-center items-center bg-slate-700 outline-none border-none"
        onSubmit={submitHandler}
      >
        <input
          type="text"
          placeholder="Enter Your Task Here"
          className="px-4 w-52 rounded-x h-8 border-2 border-zinc-700 rounded m-3 outline-none border-none"
          autoComplete="off"
          value={Task}
          onChange={(e) => {
            setTask(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Enter Task Description Here"
          className="w-52 px-4 rounded-x h-8 border-2 border-zinc-700 rounded m-3 outline-none border-none"
          id="Description"
          autoComplete="off"
          value={Description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
        <button
          id="btn"
          className="px-4 rounded-x h-8 border-2 border-zinc-700 rounded m-3 bg-gray-800 text-slate-50 outline-none border-none"
        >
          Add Task
        </button>
      </form>
      <section className=" bg-slate-600 h-full">
        <div className=" bg-slate-600 text-white">{renderTask}</div>
      </section>
    </>
  );
};

export default Form;

"use client";
import React, { useState } from "react";
const Form = () => {
  const [Task, setTask] = useState("");
  const [Description, setDescription] = useState("");
  const [mainTask, setmainTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    setmainTask([...mainTask, { Task, Description }]);
    setTask("");
    setDescription("");
    console.log(mainTask);
  };

  const renderTask = mainTask.map((t, i) => {
    return (
      <li className="border-gray-800 border px-8 py-2 flex items-center justify-center">
        <div className="w-full">
          <h5 className="text-gray-900 text-4xl">{t.Task}</h5>
          <p>{t.Description}</p>
        </div>
        <button className="justify-end bg-red-500 w-20 h-10">Delete</button>
      </li>
    );
  });

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
          id="Task"
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
        <ul>{renderTask}</ul>
      </section>
    </>
  );
};

export default Form;

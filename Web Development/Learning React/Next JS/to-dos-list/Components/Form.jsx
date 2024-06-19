import React from "react";

const Form = () => {
  return (
    <>
      <form className="h-16 flex justify-center items-center">
        <input
          type="text"
          placeholder="Enter Your Task Here"
          className="px-4 rounded-x h-8 border-2 border-zinc-700 rounded m-3"
        />
        <input
          type="text"
          placeholder="Enter Task Description Here"
          className="w-52 px-4 rounded-x h-8 border-2 border-zinc-700 rounded m-3"
        />
        <button className="px-4 rounded-x h-8 border-2 border-zinc-700 rounded m-3 bg-gray-800 text-slate-50">
          Add Task
        </button>
      </form>
    </>
  );
};

export default Form;

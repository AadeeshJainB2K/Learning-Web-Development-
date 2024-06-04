"use client";
import React from "react";

const page = () => {
  let marks = 96;
  const changeMarks = () => {
    console.log(marks);
    marks = 33;
    console.log(marks);
  };
  return (
    <>
      <div className="font-bold text-xl text-red-600">
        My marks in cs were {marks}
      </div>
      <button
        onClick={() => {
          marks = 33;
        }}
      >
        Update
      </button>
    </>
  );
};

export default page;

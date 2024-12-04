"use client";
import React from "react";

class song {
  constructor(
    public name: string,
    public artist: string,
    public time: number,
    public isFree: boolean,
    public thumbnail?: string
  ) {}
}

const jattDontCare: object = new song(
  "jattDontCare",
  "abc",
  2,
  true,
  "abcd.png"
);

console.log(jattDontCare);

const page = () => {
  return (
    <>
      <div className="bg-blue-500  text-red-600">page</div>
    </>
  );
};

export default page;

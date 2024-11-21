"use client";
import React from "react";

class song {
  constructor(
    public name: string,
    public artist: string,
    public thumbnail?: string,
    public time: number,
    public isFree: boolean
  ) {}
}

const page = () => {
  return (
    <>
      <div className="bg-blue-500  text-red-600">page</div>
    </>
  );
};

export default page;

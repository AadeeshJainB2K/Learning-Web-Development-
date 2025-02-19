"use client";
import React from "react";
import Main from "./Components/Main";
import Header from "./Components/Header";

const page = () => {
  const GEMINI_API_KEY = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
  return (
    <>
      <Header />
      <Main GEMINI_API_KEY={GEMINI_API_KEY} />
    </>
  );
};

export default page;

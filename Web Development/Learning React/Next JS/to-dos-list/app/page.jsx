"use-client";
import React from "react";
import Tasks from "@/Components/Tasks";
import Header from "@/Components/Header";
import Form from "@/Components/Form";

const page = () => {
  return (
    <>
      <Header />
      <Form />
      <Tasks />
    </>
  );
};

export default page;

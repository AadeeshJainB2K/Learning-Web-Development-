import React from "react";
import TodoItem from "./TodoItem";

export default function ToDos(props) {
  return (
    <>
      <p>{<TodoItem TodoItem="go to market" />}</p>
    </>
  );
}

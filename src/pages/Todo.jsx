import React from "react";
import TodoList from "../components/TodoList";
import TodoForm from "../components/TodoForm";

const Todo = () => {
  return (
    <div className=" flex items-center flex-col justify-center h-[100vh]">
      <TodoForm />
      <TodoList />
    </div>
  );
};

export default Todo;

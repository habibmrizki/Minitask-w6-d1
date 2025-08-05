import React, { useState, useContext } from "react";
import { TodoContext } from "../contexts/todo/TodoProvider";

const TodoForm = () => {
  const { dispatch } = useContext(TodoContext);
  const [judul, setJudul] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (judul.trim() === "") return;

    dispatch({
      type: "ADD_TODO",
      payload: { judul },
    });
    setJudul("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-4 bg-white rounded-lg shadow-md mb-4"
    >
      <input
        type="text"
        placeholder="Tambahkan todo baru..."
        value={judul}
        onChange={(e) => setJudul(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        className="mt-2 w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition duration-200"
      >
        Tambah Todo
      </button>
    </form>
  );
};

export default TodoForm;

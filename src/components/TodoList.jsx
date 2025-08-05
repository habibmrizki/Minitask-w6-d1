import React, { useContext } from "react";
import { TodoContext } from "../contexts/todo/TodoProvider";

const TodoList = () => {
  const { state, dispatch } = useContext(TodoContext);

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      {state.length === 0 ? (
        <p className="text-gray-500 text-center">
          Tidak ada todo saat ini. Ayo tambahkan satu!
        </p>
      ) : (
        <ul>
          {state.map((todo) => (
            <li
              key={todo.id}
              className="flex items-center justify-between py-2 border-b last:border-b-0 border-gray-200"
            >
              <div className="flex items-center">
                <span
                  className={`text-lg ${
                    todo.Status ? "line-through text-gray-500" : "text-gray-800"
                  }`}
                >
                  {todo.judul}
                </span>
              </div>
              <button
                onClick={() =>
                  dispatch({ type: "REMOVE_TODO", payload: { id: todo.id } })
                }
                className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition duration-200"
              >
                Hapus
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TodoList;

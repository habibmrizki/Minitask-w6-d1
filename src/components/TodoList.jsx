// import React, { useContext } from "react";
// import { TodoContext } from "../contexts/todo/TodoProvider";

// const TodoList = () => {
//   const { state, dispatch } = useContext(TodoContext);

//   return (
//     <div className="bg-white p-4 rounded-lg shadow-md">
//       {state.length === 0 ? (
//         <p className="text-gray-500 text-center">
//           Tidak ada todo saat ini. Ayo tambahkan satu!
//         </p>
//       ) : (
//         <ul>
//           {state.map((todo) => (
//             <li
//               key={todo.id}
//               className="flex items-center justify-between py-2 border-b last:border-b-0 border-gray-200"
//             >
//               <div className="flex items-center">
//                 <span
//                   className={`text-lg ${
//                     todo.Status ? "line-through text-gray-500" : "text-gray-800"
//                   }`}
//                 >
//                   {todo.judul}
//                 </span>
//               </div>
//               <button
//                 onClick={() =>
//                   dispatch({ type: "REMOVE_TODO", payload: { id: todo.id } })
//                 }
//                 className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition duration-200"
//               >
//                 Hapus
//               </button>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default TodoList;

import { useSelector, useDispatch } from "react-redux";
import { toggleTodo, removeTodo, editTodo } from "../redux/slices/todo";

const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      {todos.length === 0 ? (
        <p className="text-gray-500 text-center">
          Tidak ada todo saat ini. Ayo tambahkan satu!
        </p>
      ) : (
        <ul>
          {todos.map((todo) => (
            <li
              key={todo.id}
              className="flex items-center justify-between py-2 border-b last:border-b-0 border-gray-200"
            >
              <div className="flex items-center">
                <span
                  className={`text-lg ${
                    todo.status ? "line-through text-gray-500" : "text-gray-800"
                  } cursor-pointer`}
                  onClick={() => dispatch(toggleTodo({ id: todo.id }))}
                >
                  {todo.judul}
                </span>
              </div>
              <button
                onClick={() =>
                  dispatch(
                    editTodo({
                      id: todo.id,
                      judul: prompt("Edit todo:", todo.judul) || todo.judul,
                      status: !todo.status,
                    })
                  )
                }
                className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600 transition duration-200"
              >
                Edit
              </button>
              <button
                onClick={() => dispatch(removeTodo({ id: todo.id }))}
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

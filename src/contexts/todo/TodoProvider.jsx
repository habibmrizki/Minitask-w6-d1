// import { TodoContext } from "../todo/TodoContext";
// import { useReducer } from "react";

// const initialState = [];
// const reducer = (state, action) => {
//   switch ((action, type)) {
//     case "ADD_TODO":
//       return {
//         ...state,
//         id: Date.now(),
//         judul: action.payload.judul,
//         Status: false,
//       };
//     case "TOGGLE_TODO": {
//       return { ...state, Status: !state.Status };
//     }
//     case "REMOVE_TODO":
//       return initialState;
//     default:
//       return state;
//   }
// };

// export function todoProvider({ children }) {
//   const [state, dispatch] = useReducer(reducer, initialState);
//   return (
//     <TodoContext.Provider value={{ state, dispatch }}>
//       {children}
//     </TodoContext.Provider>
//   );
// }
// src/contexts/todo/TodoProvider.jsx
import React, { createContext, useReducer } from "react";

const initialState = [];

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          judul: action.payload.judul,
          Status: false,
        },
      ];
    case "TOGGLE_TODO":
      return state.map((todo) =>
        todo.id === action.payload.id ? { ...todo, Status: !todo.Status } : todo
      );
    case "REMOVE_TODO":
      return state.filter((todo) => todo.id !== action.payload.id);
    default:
      return state;
  }
};

export const TodoContext = createContext(initialState);

export default function TodoProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
}

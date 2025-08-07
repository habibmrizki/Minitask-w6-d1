import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  initialState: [],
  name: "todo",
  reducers: {
    addTodo: (state, action) => {
      state.push({
        id: Date.now(),
        judul: action.payload.judul,
        status: false,
      });
    },
    toggleTodo: (state, action) => {
      const todo = state.find((t) => t.id === action.payload.id);
      if (todo) {
        todo.status = !todo.status;
      }
    },
    removeTodo: (state, action) => {
      return state.filter((t) => t.id !== action.payload.id);
    },
    editTodo: (state, action) => {
      const todo = state.find((t) => t.id === action.payload.id);
      if (todo) {
        todo.judul = action.payload.judul;
      }
    },
  },
});

export const { addTodo, toggleTodo, removeTodo, editTodo } = todoSlice.actions;

export default todoSlice.reducer;

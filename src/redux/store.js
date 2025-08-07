import { configureStore } from "@reduxjs/toolkit";

import shoppingReducer from "./slices/shoppingSlice";
import todoReducer from "./slices/todo";
import surveyReducer from "./slices/surveyResult";

const store = configureStore({
  reducer: {
    shopping: shoppingReducer,
    todos: todoReducer,
    surveys: surveyReducer,
  },
});

export default store;

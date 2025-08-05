import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import Todo from "./pages/Todo.jsx";
import { LoginPage } from "./pages/Login.jsx";
import ShoppingApp from "./pages/ShoppingApp.jsx";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Todo />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/shopping" element={<ShoppingApp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;

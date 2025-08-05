import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import App from './App.jsx'
import AppRouter from "./Router.jsx";
import TodoProvider from "./contexts/todo/TodoProvider.jsx";
import { AuthProvider } from "./contexts/auth/AuthProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <TodoProvider>
        <AppRouter />
      </TodoProvider>
    </AuthProvider>
  </StrictMode>
);

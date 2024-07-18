import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import RoutesSetup from "./routes/RoutesSetup";
import { AuthProvider } from "./contexts/AuthContext";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <RoutesSetup />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;

import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom/umd/react-router-dom.development";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/home";
import NotHome from "./pages/nothome";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/not-home" element={<NotHome />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

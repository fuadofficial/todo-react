import React from "react";
import TodoApp from "./component/TodoApp/TodoApp";
import Header from "./component/Header/Header";
import About from "./component/TodoApp/About/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<TodoApp />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

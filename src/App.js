import React from "react";
import TodoApp from "./component/TodoApp/TodoApp";
import Header from "./component/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./component/TodoApp/About/About";

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        {/* this is project page */}
        <Route path="/" element={<TodoApp />} />
        {/* this is about page for cheking router and routes */}
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

import React from "react";
import TodoApp from "./component/TodoApp";
import Header from "./component/Header";
import About from "./component/TodoApp/About";
import Text from "./component/Text";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<TodoApp />} />
        <Route path="/about" element={<About />} />
        <Route path="/text" element={<Text />} />
      </Routes>
    </Router>
  );
}

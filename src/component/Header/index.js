import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/text">Text</Link>
    </header>
  );
}

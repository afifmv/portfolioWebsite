import logo from "./logo.svg";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom"; // Import Routes, Route, and Link
import Home from "./components/Home"; // Import Home component
import Users from "./components/Users"; // Import Users component

function App() {
  return (
    <div>
      <Home />
      <Experience />
    </div>
  );
}

export default App;

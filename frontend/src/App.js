import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Chart from "./Components/Chart";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/chart" element={<Chart />} />
    </Routes>
  );
}

export default App;

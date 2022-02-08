import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Register from "./pages/Regsiter";
import Inventory from "./pages/Inventory";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/siit/" element={<Register />} />
        <Route path="/siit/inventory" element={<Inventory />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

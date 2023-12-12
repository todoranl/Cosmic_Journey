import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header"; // Verificați calea către fișierul Header
import SolarSystemView from "./components/SolarSystemView";
import PlanetDetail from "./components/PlanetDetail";
import "./components/header.css"; // Verificați calea către fișierul CSS din directorul components

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<SolarSystemView />} />
        <Route path="/planets/:planetName" element={<PlanetDetail />} />
      </Routes>
    </Router>
  );
}

export default App;

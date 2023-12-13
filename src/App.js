import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header"; // Verificați calea către fișierul Header
import SolarSystemView from "./components/SolarSystemView";
import PlanetDetail from "./components/PlanetDetail";
import "./components/header.css"; // Verificați calea către fișierul CSS din directorul components
import Home from "./components/Home";
import BookingForm from "./components/BookingForm";
import "./components/BookingForm.css";

function App() {
  return (
    <Router>
      <Header />
      <Home />
      <BookingForm />
      <Routes>
        <Route path="/" element={<SolarSystemView />} />
        <Route path="/planets/:planetName" element={<PlanetDetail />} />
      </Routes>
    </Router>
  );
}

export default App;

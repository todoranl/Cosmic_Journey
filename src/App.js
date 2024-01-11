import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header"; // Verificați calea către fișierul Header
import SolarSystemView from "./components/SolarSystemView";
import PlanetDetail from "./components/PlanetDetail";
import "./components/header.css"; // Verificați calea către fișierul CSS din directorul components
import Home from "./components/Home";
import BookingForm from "./components/BookingForm";
import "./components/BookingForm.css";
import Earth from './pages/Earth';
import "./index";
import Mercury from './pages/Mercury';
import Jupiter from './pages/Jupiter';
import Neptune from './pages/Neptune';
import Saturn from './pages/Saturn';
import Uranus from './pages/Uranus';
import Venus from './pages/Venus';
import Mars from './pages/Mars';


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<SolarSystemView />} />
        <Route path="/planets/earth" element={<Earth />} />
        <Route path="/planets/mercury" element={<Mercury />} />
    <Route path="/planets/jupiter" element={<Jupiter />} />
    <Route path="/planets/neptune" element={<Neptune />} />
    <Route path="/planets/saturn" element={<Saturn />} />
    <Route path="/planets/uranus" element={<Uranus />} />
    <Route path="/planets/venus" element={<Venus />} />
    <Route path="/planets/mars" element={<Mars />} />
      </Routes>
    </Router>
  );
}

export default App;

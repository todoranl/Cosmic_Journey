import React from "react";
import { BrowserRouter as Router, Route, Routes, Form } from "react-router-dom";

import Header from "./components/Header";
import SolarSystemView from "./components/SolarSystemView";
import PlanetDetail from "./components/PlanetDetail";
import Home from "./components/Home";
import User from "./components/User";
import BookingForm from "./components/BookingForm";
import Earth from './pages/Earth';
import Mercury from './pages/Mercury';
import Jupiter from './pages/Jupiter';
import Neptune from './pages/Neptune';
import Saturn from './pages/Saturn';
import Uranus from './pages/Uranus';
import Venus from './pages/Venus';
import Mars from './pages/Mars';
import Login from "./components/Login";

import './styles/tailwind.css';
import './components/header.css'; // Verifică calea către fișierul CSS
import './components/BookingForm.css';
function App() {
  return (
    <Router>
  
      <Header />
      <Routes>
      <Route path="/form" element={<User />} />

        <Route path="/" element={<Home />} />
        <Route path="/user" element={<User />} />

        <Route path="/signin" element={<Login />} />
        <Route path="/solarsystem" element={<SolarSystemView />} />
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

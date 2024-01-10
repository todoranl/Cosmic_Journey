import React from "react";
import { Link } from "react-router-dom";
import "./header.css"; // Verify the path to the CSS file in the components directory

const Header = () => {
  const planets = [
    "Mercury",
    "Venus",
    "Earth",
    "Mars",
    "Jupiter",
    "Saturn",
    "Uranus",
    "Neptune",
  ];

  return (
    <header className="p-4" style={{ backgroundColor: "transparent" }}>
      <div className="container mx-auto flex justify-between items-center">
      <Link to={`/`} className="nav-link p-2 text-white hover:text-gray-300">
        Cosmic Journey
      </Link>
        <nav className="flex space-x-4">
          {planets.map((planet) => (
            <Link
              key={planet}
              to={`/planets/${planet.toLowerCase()}`}
              className="nav-link p-2 text-white hover:text-gray-300"
            >
              {planet}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;

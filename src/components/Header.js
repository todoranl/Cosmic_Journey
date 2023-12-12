import React from "react";
import { Link } from "react-router-dom";
import "./header.css"; // Verify the path to the CSS file in the components directory

const Header = () => {
  // Planet names to create links
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
    <header className="bg-black text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl">Cosmic Journey</h1>
        <nav className="flex space-x-4">
          {" "}
          {/* Use flex and space-x-4 for horizontal layout */}
          {planets.map((planet) => (
            <Link
              key={planet}
              to={`/planets/${planet.toLowerCase()}`}
              className="nav-link p-2"
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

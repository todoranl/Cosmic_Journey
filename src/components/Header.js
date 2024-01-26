import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import "./header.css"; // Verify the path to the CSS file in the components directory

const Header = () => {
  const [showHeader, setShowHeader] = useState(true);
  let lastScrollY = window.scrollY;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < lastScrollY) {
        // Scrolling up
        setShowHeader(true);
      } else {
        // Scrolling down
        setShowHeader(false);
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const planetColors = {
    Mercury: ['hover:text-gray-600', '#4b5563'],
    Venus: ['hover:text-yellow-500', '#eab308'],
    Earth: ['hover:text-blue-500', '#3b82f6'],
    Mars: ['hover:text-red-500', '#ef4444'],
    Jupiter: ['hover:text-orange-500', '#f97316'],
    Saturn: ['hover:text-pink-300', '#f9a8d4'],
    Uranus: ['hover:text-green-500', '#22c55e'],
    Neptune: ['hover:text-blue-700', '#1d4ed8'],
    // Add more planets and colors as needed
  };

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
    <header className={`header ${showHeader ? 'visible' : 'hidden'}`}>
      <div className="container">
        <NavLink to={`/`} className="nav-link p-2 text-white hover:text-gray-300">
          Cosmic Journey
        </NavLink>
        <nav className="flex space-x-4">
          {planets.map((planet) => (
            <NavLink
              key={planet}
              to={`/planets/${planet.toLowerCase()}`}
              className={`nav-link p-2 text-white ${planetColors[planet][0] || 'hover:text-gray-300'}`}
              style={({ isActive }) => {
                return isActive ? { color: planetColors[planet][1] } : {};
                }}
            >
              {planet}
            </NavLink>
          ))}
           <NavLink to="/signin" className="nav-link p-2 text-white hover:text-purple-300"
           style={({ isActive }) => {
            return isActive ? { color: '#d8b4fe' } : {};
            }}
            >
              Sign In
            </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;

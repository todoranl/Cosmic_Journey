import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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
    Mercury: 'hover:text-gray-600',
    Venus: 'hover:text-yellow-500',
    Earth: 'hover:text-blue-500',
    Mars: 'hover:text-red-500',
    Jupiter: 'hover:text-orange-500',
    Saturn: 'hover:text-pink-300',
    Uranus: 'hover:text-green-500',
    Neptune: 'hover:text-blue-700',
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
        <Link to={`/`} className="nav-link p-2 text-white hover:text-gray-300">
          Cosmic Journey
        </Link>
        <nav className="flex space-x-4">
          {planets.map((planet) => (
            <Link
              key={planet}
              to={`/planets/${planet.toLowerCase()}`}
              className={`nav-link p-2 text-white ${planetColors[planet] || 'hover:text-gray-300'}`}
            >
              {planet}
            </Link>
          ))}
           <Link to="/signin" className="nav-link p-2 text-white hover:text-purple-300">
              Sign In
            </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;

// src/components/PlanetDetail.js
import React from 'react';

const PlanetDetail = ({ planet }) => {
  return (
    <div className="planet-detail">
      <h2>{planet.name}</h2>
      <p>{planet.description}</p>
      <p>Rotation Speed: {planet.rotationSpeed}</p>
      <p>Distance from Earth: {planet.distanceFromEarth}</p>
    </div>
  );
};

export default PlanetDetail;

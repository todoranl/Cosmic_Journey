// src/components/PlanetDetailsComponent.jsx
import React from 'react';

const PlanetDetailsComponent = ({ planet }) => {
  return (
    <div className="planet-details">
      <h2>{planet.name}</h2>
      <p>{planet.description}</p>
      <div className="specifications">
        <table>
          <tbody>
            <tr>
              <td>Rotation Speed</td>
              <td>{planet.rotationSpeed}</td>
            </tr>
            <tr>
              <td>Distance from Earth</td>
              <td>{planet.distanceFromEarth}</td>
            </tr>
            {/* Add more rows for additional specifications */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PlanetDetailsComponent;

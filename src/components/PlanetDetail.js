// PlanetDetail.js
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const PlanetDetail = () => {
  const [planetData, setPlanetData] = useState(null);
  const { planetName } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/celestial_objects/${planetName}`)
      .then((response) => {
        setPlanetData(response.data);
      })
      .catch((error) => console.log(error));
  }, [planetName]);

  if (!planetData) return <div>Loading...</div>;

  return (
    <div className="container mx-auto">
      <div className="flex">
        <div className="w-1/2">{/* Afișează poza planetei */}</div>
        <div className="w-1/2">
          <h2>{planetData.name}</h2>
          {/* Alte detalii ale planetei */}
          <button>Explore Activities</button>
        </div>
      </div>
    </div>
  );
};

export default PlanetDetail;

// src/pages/Mercur.jsx
import React from 'react';
import ItemThumbnailsDemo from '../components/ItemThumbnailsDemo';
import '../styles/Planets.css';

const Venus = () => {
    const description = "Venus, often referred to as Earth’s sister planet due to their similar size, mass, proximity to the Sun, and bulk composition, presents a stark contrast to Earth in terms of surface conditions and atmosphere. Venus is the second planet from the Sun and the third brightest object in Earth's sky after the Sun and Moon. Named after the Roman goddess of love and beauty, Venus has been a subject of human interest since ancient times and is a significant feature in various cultural and religious practices."; // Your 500-word description
    const specifications = {
        distanceFromSun: "108.2 million km",
        orbitalPeriod: "225 days",
        surfaceTemperature: "462 °C",
        radius: "6,051.8 km"
    };
    return (
        <div className="planet-page">
        
            
            <div className="planet-content">
              
                <ItemThumbnailsDemo planetName="Venus" />
              
                <p className="planet-description">{description}</p>
            </div>
           

            <div className="planet-specification-tables">
            <table> <tbody><tr><td>
                    <thead><tr><th>Distance from Sun</th></tr></thead>
                   {specifications.distanceFromSun}</td></tr></tbody>
                </table>
                <table>
                <tbody><tr><td>
                    <thead><tr><th>Orbital Period</th></tr></thead>
                   {specifications.orbitalPeriod}</td></tr></tbody>
                </table>
                <table>
                <tbody><tr><td>
                    <thead><tr><th>Surface Temperature</th></tr></thead>
                   {specifications.surfaceTemperature}</td></tr></tbody>
                </table>
                <table>
                <tbody><tr><td>
                    <thead><tr><th>Radius</th></tr></thead>
                   {specifications.radius}</td></tr></tbody>
                </table>
            </div>
        </div>
    );
};

export default Venus;

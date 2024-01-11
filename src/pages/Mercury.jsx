// src/pages/Mercur.jsx
import React from 'react';
import ItemThumbnailsDemo from '../components/ItemThumbnailsDemo';

const Mercur = () => {
    return (
        <div className="planet-page">
            <h1>Mercur</h1>  {/* Updated page title */}
            <ItemThumbnailsDemo planetName="Mercur" />  {/* Ensure this matches your image service */}
            {/* Other content for Mercur */}
        </div>
    );
};
export default Mercur;

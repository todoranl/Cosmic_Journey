// src/pages/Marte.jsx
import React from 'react';
import ItemThumbnailsDemo from '../components/ItemThumbnailsDemo';

const Marte = () => {
    return (
        <div className="planet-page">
            <h1>Marte</h1>  {/* Page title for Mars (Marte in Romanian) */}
            <ItemThumbnailsDemo planetName="Marte" />  {/* Fetch and display images for Mars */}
            {/* Other content for Marte can be added here */}
        </div>
    );
};

export default Marte;

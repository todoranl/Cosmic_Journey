// src/pages/Mercur.jsx
import React from 'react';
import ItemThumbnailsDemo from '../components/ItemThumbnailsDemo';

const Jupiter = () => {
    return (
        <div className="planet-page">
            <h1>Jupiter</h1>
            <ItemThumbnailsDemo planetName="Jupiter" />
            {/* Other content for Mercur */}
        </div>
    );
};

export default Jupiter;

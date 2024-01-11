// src/pages/Mercur.jsx
import React from 'react';
import ItemThumbnailsDemo from '../components/ItemThumbnailsDemo';

const Venus = () => {
    return (
        <div className="planet-page">
            <h1>Venus</h1>
            <ItemThumbnailsDemo planetName="Venus" />
            {/* Other content for Mercur */}
        </div>
    );
};

export default Venus;

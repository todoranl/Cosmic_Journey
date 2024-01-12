// src/pages/Mercur.jsx
import React from 'react';
import ItemThumbnailsDemo from '../components/ItemThumbnailsDemo';

const Saturn = () => {
    return (
        <div className="planet-page">
            <h1>Saturn</h1>
            <ItemThumbnailsDemo planetName="Saturn" />
            {/* Other content for Mercur */}
        </div>
    );
};

export default Saturn;

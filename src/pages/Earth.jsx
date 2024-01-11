// src/pages/Terra.jsx
import React from 'react';
import ItemThumbnailsDemo from '../components/ItemThumbnailsDemo';

const Terra = () => {
  return (
      <div className="planet-page">
          <h1>Terra</h1>
          <ItemThumbnailsDemo planetName="Terra" />
          {/* Other content for Terra */}
      </div>
  );
};

export default Terra;
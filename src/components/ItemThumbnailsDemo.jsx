// src/components/ItemThumbnailsDemo.jsx
import React, { useState, useEffect } from 'react';
import { Galleria } from 'primereact/galleria';
import { getImagesForPlanet } from '../service/PhotoService'; // Corrected import statement
import './ItemThumbnailsDemo.css'; // Import your custom CSS

export default function ItemThumbnailsDemo({ planetName }) {
    const [images, setImages] = useState([]);
    const responsiveOptions = [
        {
            breakpoint: '991px',
            numVisible: 4
        },
        {
            breakpoint: '767px',
            numVisible: 3
        },
        {
            breakpoint: '575px',
            numVisible: 1
        }
    ];

    useEffect(() => {
        // Use getImagesForPlanet function to fetch images for a given planet
        getImagesForPlanet(planetName).then(setImages);
    }, [planetName]); // Make sure to include planetName in the dependency array

    const itemTemplate = (item) => {
        return <img src={item.itemImageSrc} alt={item.alt} className="main-image" />;
    };

    const thumbnailTemplate = (item) => {
        return (
            <img 
                src={item.thumbnailImageSrc} 
                alt={item.alt} 
                className="thumbnail-image"
            />
        );
    };

    return (
        <div className="card"> 
            <Galleria value={images} responsiveOptions={responsiveOptions} numVisible={5} circular 
                style={{ maxWidth: '640px' }}
                showItemNavigators item={itemTemplate} thumbnail={thumbnailTemplate} />
        </div>
    );
}


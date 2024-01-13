// src/components/Carousel.jsx
import React, { useState } from 'react';
import './Carousel.css'; // Make sure to create this CSS file

const Carousel = ({ images }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const goToPrev = () => {
        setActiveIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const goToNext = () => {
        setActiveIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <div className="carousel-container">
            <button onClick={goToPrev}>Prev</button>
            <div className="carousel" style={{ transform: `translateX(-${activeIndex * 100 / 3}%)` }}>
            {images.map((img, index) => (
    <div
        key={index}
        className={`carousel-item ${index === activeIndex ? 'active' : ''}`}
        style={{ backgroundImage: `url(${img})` }} // Apply the background image
    />
))}

</div>
            <button onClick={goToNext}>Next</button>
        </div>
    );
};

export default Carousel;

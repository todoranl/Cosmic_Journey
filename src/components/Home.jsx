// src/components/Home.jsx
import React, { useEffect, useRef } from 'react';
import './Home.css';

import BookingForm from './BookingForm';
const Home = () => {
    const videoRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const [entry] = entries;

            if (entry.isIntersecting) {
                videoRef.current.play();
            } else {
                videoRef.current.pause();
                videoRef.current.currentTime = 0;
            }
        }, {
            threshold: 0.1 // 1.0 means 100% of the item is visible
        });

        if (videoRef.current) {
            observer.observe(videoRef.current);
        }

        return () => {
            if (videoRef.current) {
                observer.unobserve(videoRef.current);
            }
        };
    }, []);
      // Placeholder images array for the carousel
      

    return (
      
      <div className="home-element" style={{ backgroundColor: 'transparent' }}>
         <div className="booking-form-container">
        <BookingForm />
        </div>
            <img src="https://firebasestorage.googleapis.com/v0/b/cosmicjourney-dab3e.appspot.com/o/HS-hero.webp?alt=media&token=a5686fd8-f1c3-448b-8b21-d7d63db04ad9" alt="Background" className="background-image" />
            <div className="overlay-text">
                <h1>Welcome to Our Planet Travel Service</h1>
                <p>Explore the wonders of the universe!</p>
               
            </div>
            <div className='rocket'>
              <img src="https://firebasestorage.googleapis.com/v0/b/cosmicjourney-dab3e.appspot.com/o/ourcrew1.jpg?alt=media&token=5c75afc9-8baf-4030-90f8-146cc3cc9f3d" />
              <img src="https://firebasestorage.googleapis.com/v0/b/cosmicjourney-dab3e.appspot.com/o/ourcrew2.jpg?alt=media&token=12e58bde-5b5a-4b84-b3da-f98cd5301514" />
              <img src="https://firebasestorage.googleapis.com/v0/b/cosmicjourney-dab3e.appspot.com/o/spaceships.jpg?alt=media&token=b1abab29-eb1c-4a35-8527-702c700d2cb7" />
              <img src="https://firebasestorage.googleapis.com/v0/b/cosmicjourney-dab3e.appspot.com/o/emotionalpets.jpg?alt=media&token=931ba6ea-3a4a-46dd-ae7d-bb2240f3cea5" />
            
            </div>
            
            <video 
                ref={videoRef} 
                loop 
                
                className="background-video"
            >
                <source src="https://firebasestorage.googleapis.com/v0/b/cosmicjourney-dab3e.appspot.com/o/367357ba-42f2-4de9-b7f5-9b28094c83d2.jpeg?alt=media&token=bbc8488b-8a2d-4fed-9215-5eba779a2ffe" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
              
                
        </div>
    );
};

export default Home;

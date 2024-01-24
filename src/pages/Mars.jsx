import React from 'react';
import '../styles/Planets.css'; // Import your CSS
import BookingForm from '../components/BookingForm';

const Mars = () => {
  return (
    <>
      <div className="mars">
        <div className="planets-text">
        <h1>MARS</h1>
          <p>Explore the wonders of the universe!</p>
          
         
        </div>
        <div className="booking-form-container">
        <BookingForm />
        </div>
      </div>

      <div className="mars-activities">
        <img src="https://firebasestorage.googleapis.com/v0/b/cosmicjourney-dab3e.appspot.com/o/marsfirstactivity.jpg?alt=media&token=a7d32026-2652-44b5-9201-42c414cdf66c" alt="Activitățile de pe Marte" className="mars-activities-image" />
      </div>

      <div className="mars-activities">
        <img src="https://firebasestorage.googleapis.com/v0/b/cosmicjourney-dab3e.appspot.com/o/marssecondactivity.jpg?alt=media&token=fb618c62-2f61-469e-9cac-e46618c1a6b2" alt="Activitățile de pe Marte" className="mars-activities-image" />
      </div>

      <div className="mars-activities">
        <img src="https://firebasestorage.googleapis.com/v0/b/cosmicjourney-dab3e.appspot.com/o/marsthirdactivity.jpg?alt=media&token=511dd4f1-9fde-4354-95e9-a4177a513488" alt="Activitățile de pe Marte" className="mars-activities-image" />
      </div>

      
      <div className="mars-activities">
        <img src="https://firebasestorage.googleapis.com/v0/b/cosmicjourney-dab3e.appspot.com/o/marsfourthactivity.jpg?alt=media&token=a4c0f01f-d23e-406d-a90a-788f6e8406e3" alt="Activitățile de pe Marte" className="mars-activities-image" />
      </div>

    </> // Asigurați-vă că acesta este singurul div închizător pentru div-ul "mars"
  );
};

export default Mars;
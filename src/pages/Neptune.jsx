import React from 'react';
import '../styles/Planets.css'; // Import your CSS
import BookingForm from '../components/BookingForm';

const Neptune = () => {
  return (
    <>
      <div className="neptune">
        <div className="planets-text">
        <h1>NEPTUNE</h1>
          <p>Explore the wonders of the universe!</p>
          
        
        </div>
        <div className="booking-form-container">
        <BookingForm />
        </div>
      </div>

      <div className="neptune-activities">
        <img src="https://firebasestorage.googleapis.com/v0/b/cosmicjourney-dab3e.appspot.com/o/Neptunefirstactivity.jpg?alt=media&token=008e85fe-d1bf-4ab0-b866-89babdc3c974" alt="Activitățile de pe Neptun" className="neptune-activities-image" />
      </div>

      <div className="neptune-activities">
        <img src="https://firebasestorage.googleapis.com/v0/b/cosmicjourney-dab3e.appspot.com/o/Neptunesecondacttivity.jpg?alt=media&token=d8832af0-0f4d-4180-867c-43dbb9f18b6b" alt="Activitățile de pe Neptun" className="neptune-activities-image" />
      </div>

      <div className="neptune-activities">
        <img src="https://firebasestorage.googleapis.com/v0/b/cosmicjourney-dab3e.appspot.com/o/Neptunethirdactivity.jpg?alt=media&token=7c9d4c43-8e3a-4c4e-90da-0d1892d536f6" alt="Activitățile de pe Neptun" className="neptune-activities-image" />
      </div>

      
      <div className="neptune-activities">
        <img src="https://firebasestorage.googleapis.com/v0/b/cosmicjourney-dab3e.appspot.com/o/Neptunefouractivity.jpg?alt=media&token=80462807-d4a3-4dfa-9ab8-04714a9694b0" alt="Activitățile de pe Neptun" className="neptune-activities-image" />
      </div>

    </> // Asigurați-vă că acesta este singurul div închizător pentru div-ul "neptune"
  );
};

export default Neptune;

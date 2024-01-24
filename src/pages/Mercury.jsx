import React from 'react';
import '../styles/Planets.css'; // Import your CSS
import BookingForm from '../components/BookingForm';

const Mercury = () => {
  return (
    <>
      <div className="mercury">
        <div className="planets-text">
        <h1>MERCURY</h1>
          <p>Explore the wonders of the universe!</p>
          
        
          
        </div>
        <div className="booking-form-container">
        <BookingForm />
        </div>
      </div>

      <div className="mercury-activities">
        <img src="https://firebasestorage.googleapis.com/v0/b/cosmicjourney-dab3e.appspot.com/o/mercuryfirstactivity.jpg?alt=media&token=d3a525b5-100e-41fa-a7c3-33df195bb7be" alt="Activitățile de pe Mercur" className="mercury-activities-image" />
      </div>

      <div className="mercury-activities">
        <img src="https://firebasestorage.googleapis.com/v0/b/cosmicjourney-dab3e.appspot.com/o/mercurysecondactivity.jpg?alt=media&token=e6ab1a4b-5ab6-4617-b4ff-6b5da3499a83" alt="Activitățile de pe Mercur" className="mercury-activities-image" />
      </div>

      <div className="mercury-activities">
        <img src="https://firebasestorage.googleapis.com/v0/b/cosmicjourney-dab3e.appspot.com/o/mercurythirdactivity.jpg?alt=media&token=eeeeeb4f-96c1-48a3-a4e6-5f05a3b59e5a" alt="Activitățile de pe Mercur" className="mercury-activities-image" />
      </div>

      
      <div className="mercury-activities">
        <img src="https://firebasestorage.googleapis.com/v0/b/cosmicjourney-dab3e.appspot.com/o/mercuryfourthactivity.jpg?alt=media&token=00821b93-a3b0-4bdb-badd-7ebdea9b5f11" alt="Activitățile de pe Mercur" className="mercury-activities-image" />
      </div>

    </> // Asigurați-vă că acesta este singurul div închizător pentru div-ul "mercury"
  );
};

export default Mercury;
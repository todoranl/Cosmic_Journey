import React from 'react';
import '../styles/Planets.css'; // Import your CSS
import BookingForm from '../components/BookingForm';

const Jupiter = () => {
  return (
    <>
      <div className="jupiter">
        <div className="planets-text">
        <h1>JUPITER</h1>
          <p>Explore the wonders of the universe!</p>
          
          <div className="jupiter-form">
            <BookingForm />
          </div>
        </div>
      </div>

      <div className="jupiter-activities">
        <img src="https://firebasestorage.googleapis.com/v0/b/cosmicjourney-dab3e.appspot.com/o/jupiterfirstactivity.jpg?alt=media&token=592e16a5-c3fb-4328-b1ac-75193f458554" alt="Activitățile de pe Jupiter" className="jupiter-activities-image" />
      </div>

      <div className="jupiter-activities">
        <img src="https://firebasestorage.googleapis.com/v0/b/cosmicjourney-dab3e.appspot.com/o/jupitersecondactivity.jpg?alt=media&token=a6b5da3c-0f49-424c-8df4-0eed683d8351" alt="Activitățile de pe Jupiter" className="jupiter-activities-image" />
      </div>

      <div className="jupiter-activities">
        <img src="https://firebasestorage.googleapis.com/v0/b/cosmicjourney-dab3e.appspot.com/o/jupiterthirdactivity.jpg?alt=media&token=97ac90df-55c3-4d75-9856-a733f742b1bd" alt="Activitățile de pe Jupiter" className="jupiter-activities-image" />
      </div>

      
      <div className="jupiter-activities">
        <img src="https://firebasestorage.googleapis.com/v0/b/cosmicjourney-dab3e.appspot.com/o/jupiterfourthactivity.jpg?alt=media&token=09f7c6fe-cb9c-447f-8f64-c50d1f2067e3" alt="Activitățile de pe Jupiter" className="jupiter-activities-image" />
      </div>

    </> // Asigurați-vă că acesta este singurul div închizător pentru div-ul "jupiter"
  );
};

export default Jupiter;

import React from 'react';
import '../styles/Planets.css'; // Import your CSS
import BookingForm from '../components/BookingForm';

const Saturn = () => {
  return (
    <>
      <div className="saturn">
        <div className="planets-text">
        <h1>SATURN</h1>
          <p>Explore the wonders of the universe!</p>
          
          <div className="saturn-form">
            <BookingForm />
          </div>
        </div>
      </div>

      <div className="saturn-activities">
        <img src="https://firebasestorage.googleapis.com/v0/b/cosmicjourney-dab3e.appspot.com/o/saturnfirstactivity.jpg?alt=media&token=4cafc6d3-eb49-4bb1-9d4d-2515f260e3d8" alt="Activitățile de pe Saturn" className="saturn-activities-image" />
      </div>

      <div className="saturn-activities">
        <img src="https://firebasestorage.googleapis.com/v0/b/cosmicjourney-dab3e.appspot.com/o/saturnsecondactivity.jpg?alt=media&token=fad4f077-4113-4b53-a681-cbb8bb7ac870" alt="Activitățile de pe Saturn" className="saturn-activities-image" />
      </div>

      <div className="saturn-activities">
        <img src="https://firebasestorage.googleapis.com/v0/b/cosmicjourney-dab3e.appspot.com/o/saturnthirdactivity.jpg?alt=media&token=ddeabdd5-62c5-4aa8-8707-fbee7e03408b" alt="Activitățile de pe Saaturn" className="saturn-activities-image" />
      </div>

      
      <div className="saturn-activities">
        <img src="https://firebasestorage.googleapis.com/v0/b/cosmicjourney-dab3e.appspot.com/o/saturnfourthactivity.jpg?alt=media&token=e6d05d0f-d189-4550-9e53-4cffae4ac50c" alt="Activitățile de pe Saturn" className="saturn-activities-image" />
      </div>

    </> // Asigurați-vă că acesta este singurul div închizător pentru div-ul "neptune"
  );
};

export default Saturn;

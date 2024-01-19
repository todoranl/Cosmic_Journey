import React from 'react';
import '../styles/Planets.css'; // Import your CSS
import BookingForm from '../components/BookingForm';

const Venus = () => {
  return (
    <>
      <div className="venus">
        <div className="planets-text">
        <h1>VENUS</h1>
          <p>Explore the wonders of the universe!</p>
          
          <div className="venus-form">
            <BookingForm />
          </div>
        </div>
      </div>

      <div className="venus-activities">
        <img src="https://firebasestorage.googleapis.com/v0/b/cosmicjourney-dab3e.appspot.com/o/venusfirstactivity.jpg?alt=media&token=bd4ff0f2-44d6-4145-88ed-2d4beab8dd43" alt="Activitățile de pe Venus" className="venus-activities-image" />
      </div>

      <div className="venus-activities">
        <img src="https://firebasestorage.googleapis.com/v0/b/cosmicjourney-dab3e.appspot.com/o/venussecondactivity.jpg?alt=media&token=850eccb9-4cf1-42fc-9fee-f5fa90877d9b" alt="Activitățile de pe Venus" className="venus-activities-image" />
      </div>

      <div className="venus-activities">
        <img src="https://firebasestorage.googleapis.com/v0/b/cosmicjourney-dab3e.appspot.com/o/venusthirdactivity.jpg?alt=media&token=c81f63b5-13e0-4f05-8e26-05febecbc10e" alt="Activitățile de pe Venus" className="venus-activities-image" />
      </div>

      
      <div className="venus-activities">
        <img src="https://firebasestorage.googleapis.com/v0/b/cosmicjourney-dab3e.appspot.com/o/venusfourthactivity.jpg?alt=media&token=bb74fd4e-c6d4-4246-a532-0761114dc533" alt="Activitățile de pe Venus" className="venus-activities-image" />
      </div>

    </> // Asigurați-vă că acesta este singurul div închizător pentru div-ul "venus"
  );
};

export default Venus;
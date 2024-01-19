import React from 'react';
import '../styles/Planets.css'; // Import your CSS
import BookingForm from '../components/BookingForm';

const Earth = () => {
  return (
    <>
      <div className="earth">
        <div className="planets-text">
        <h1>EARTH</h1>
          <p>Explore the wonders of the universe!</p>
          
          <div className="earth-form">
            <BookingForm />
          </div>
        </div>
      </div>

      <div className="earth-activities">
        <img src="https://firebasestorage.googleapis.com/v0/b/cosmicjourney-dab3e.appspot.com/o/earthfirstactivity.jpg?alt=media&token=3ff4487f-a5a0-430c-ad66-6cbfd1702a66" alt="Activitățile de pe Pamant" className="earth-activities-image" />
      </div>

      <div className="earth-activities">
        <img src="https://firebasestorage.googleapis.com/v0/b/cosmicjourney-dab3e.appspot.com/o/earthsecondactivity.jpg?alt=media&token=97bcec6f-a8e9-41a2-93a4-9ea5845a7673" alt="Activitățile de pe Pamant" className="earth-activities-image" />
      </div>

      <div className="earth-activities">
        <img src="https://firebasestorage.googleapis.com/v0/b/cosmicjourney-dab3e.appspot.com/o/earththirdactivity.jpg?alt=media&token=ec355f83-4393-42d5-ba59-f7a8ccbef46d" alt="Activitățile de pe Pamant" className="earth-activities-image" />
      </div>

      
      <div className="earth-activities">
        <img src="https://firebasestorage.googleapis.com/v0/b/cosmicjourney-dab3e.appspot.com/o/earthfourthactivity.jpg?alt=media&token=7b9d4deb-026d-48aa-8f74-35880c8d5cbd" alt="Activitățile de pe Pamant" className="earth-activities-image" />
      </div>

    </> // Asigurați-vă că acesta este singurul div închizător pentru div-ul "earth"
  );
};

export default Earth;
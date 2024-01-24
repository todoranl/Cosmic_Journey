import React from 'react';
import '../styles/Planets.css'; // Import your CSS
import BookingForm from '../components/BookingForm';

const Uranus = () => {
  return (
    <>
      <div className="uranus">
        <div className="planets-text">
        <h1>URANUS</h1>
          <p>Explore the wonders of the universe!</p>
          
         
        </div>
        <div className="booking-form-container">
        <BookingForm />
        </div>
      </div>

      <div className="uranus-activities">
        <img src="https://firebasestorage.googleapis.com/v0/b/cosmicjourney-dab3e.appspot.com/o/uranusfirstactivity.jpg?alt=media&token=a8961488-eca3-454f-8c65-25c1af655d40" alt="Activitățile de pe Uranus" className="uranus-activities-image" />
      </div>

      <div className="uranus-activities">
        <img src="https://firebasestorage.googleapis.com/v0/b/cosmicjourney-dab3e.appspot.com/o/uranussecondacvitity.jpg?alt=media&token=a2557416-6382-4c0e-ae7e-f9997cf2eac0" alt="Activitățile de pe Uranus" className="uranus-activities-image" />
      </div>

      <div className="uranus-activities">
        <img src="https://firebasestorage.googleapis.com/v0/b/cosmicjourney-dab3e.appspot.com/o/uranusthirdactivity.jpg?alt=media&token=e2f890b3-9d7e-4346-a857-4cc63d50fa5d" alt="Activitățile de pe Uranus" className="uranus-activities-image" />
      </div>

      
      <div className="uranus-activities">
        <img src="https://firebasestorage.googleapis.com/v0/b/cosmicjourney-dab3e.appspot.com/o/uranusfourthactivity.jpg?alt=media&token=674908f1-4b16-42df-b109-e52eb530f01f" alt="Activitățile de pe Uranus" className="uranus-activities-image" />
      </div>

    </> // Asigurați-vă că acesta este singurul div închizător pentru div-ul "neptune"
  );
};

export default Uranus;

import React from 'react'
import '../styles/Planets.css'; // Import your CSS
import BookingForm from '../components/BookingForm';
const Neptune = () => {
  return (
    <div className="neptune" style={{ backgroundColor: 'transparent' }}>
        
    <img src="https://firebasestorage.googleapis.com/v0/b/cosmicjourney-dab3e.appspot.com/o/DALL%C2%B7E%202024-01-13%2004.19.30%20-%20A%20close-up%20view%20of%20Neptune%20with%20a%20predominantly%20black%20background%2C%20focusing%20on%20a%20small%20section%20of%20the%20planet%20to%20emphasize%20its%20weather%20patterns%20and%20surf.png?alt=media&token=d160b82b-db89-464f-851d-a23af6253ebf" alt="Background" className="background-image" />
    <div className="planets-text">
        <h1>NEPTUNE</h1>
        <p>Explore the wonders of the universe!</p>
        <div className="neptune-form">
        <BookingForm />
        </div>
    </div>
    <div className='orizont'>
        <h1>Explore Neptune , and try top 5 activities !</h1>
    <img src='https://firebasestorage.googleapis.com/v0/b/cosmicjourney-dab3e.appspot.com/o/horizon.webp?alt=media&token=c1ebdb52-e5b2-4ac6-a4d8-86c4f5d5cac2 ' />
    </div>
    <div className='activitati'>
        <img src='https://firebasestorage.googleapis.com/v0/b/cosmicjourney-dab3e.appspot.com/o/activitati.png?alt=media&token=da7b1bd9-7ea0-4dc3-9bd7-7b4341f922ca' />
    </div>
   </div>
);
};
export default Neptune
import React, { useState, useEffect } from 'react';
import { db } from './firebase-config';
import { collection, addDoc } from 'firebase/firestore';
import '../styles/Form.css';
import { getAnalytics, logEvent } from 'firebase/analytics';



const User = () => {
  const planetPrices = {
    Mercury: 21000,
    Venus: 42000,
    Earth: 10000,
    Mars: 40000,
    Jupiter: 73000,
    Saturn: 120000,
    Neptune: 43000,
    // Add other planets and their prices
  };
  const accommodationPrices = {
    standard: 3300,  // Additional cost for standard accommodation
    lux: 9000,       // Additional cost for luxury accommodation
  };
  
  const classPriceMultiplier = {
    economic: 1,
    firstClass: 3.5, // 50% more expensive than economic
  };
  // State for the registration form
  const [registrationData, setRegistrationData] = useState({
    Name: '',
    surName: '',
    email: '',
    phone: '',
    wantedPlanet: '',
    departureDate: '',
    numberOfDays: 1,
    numberOfPassengers: 1,
    tripClass: '',
    accommodation: '',
    gender: '', // Add this line
    petCompanion: false,
    price: 0,
  });

  // Function to update price
  const updatePrice = () => {
    let basePrice = planetPrices[registrationData.wantedPlanet] || 0;
    let classMultiplier = classPriceMultiplier[registrationData.tripClass] || 1;
    let accommodationPrice = accommodationPrices[registrationData.accommodation] || 0;
    
    let finalPrice = (basePrice * classMultiplier + accommodationPrice) * registrationData.numberOfPassengers;
    setRegistrationData(prevState => ({
      ...prevState,
      price: finalPrice
    }));
  };
  const incrementPassengers = () => {
    setRegistrationData(prevState => ({
      ...prevState,
      numberOfPassengers: prevState.numberOfPassengers + 1
    }));
  };
  
  const decrementPassengers = () => {
    setRegistrationData(prevState => ({
      ...prevState,
      numberOfPassengers: Math.max(1, prevState.numberOfPassengers - 1)
    }));
  };
  // ... after initializing Firebase ...
const analytics = getAnalytics();


  useEffect(() => {
    updatePrice();
  }, [registrationData.wantedPlanet, registrationData.tripClass, registrationData.numberOfPassengers, registrationData.accommodation]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setRegistrationData(prevState => ({
      ...prevState,
      [name]: type === 'number' ? parseInt(value, 10) : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const docRef = await addDoc(collection(db, "registrations"), {
        ...registrationData,
        // Make sure to convert price to a number if it's a string
        price: Number(registrationData.price)
      });
      console.log("Document written with ID: ", docRef.id);
      
      // Log the event to Firebase Analytics
      logEvent(analytics, 'purchase', {
        currency: "USD",
        value: registrationData.price,
        items: [{
          name: registrationData.wantedPlanet,
          quantity: registrationData.numberOfPassengers,
          price: registrationData.price
        }]
      });
  
      // Reset the form
      setRegistrationData({
        Name: '',
        surName: '',
        email: '',
        phone: '',
        wantedPlanet: '',
        departureDate: '',
        numberOfDays: 1,
        numberOfPassengers: 1,
        tripClass: '',
        accommodation: '',
        petCompanion: false,
        price: 0,
      });
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  return (
    <div className="planet-page">
      <div className="registration-form">
        <h2>Register for Your Journey Now</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="Name"
            value={registrationData.Name}
            onChange={handleChange}
            placeholder="Name"
            required
          />
          <input
            type="text"
            name="surName"
            value={registrationData.surName}
            onChange={handleChange}
            placeholder="SurName"
            required
          />
          <input
            type="email"
            name="email"
            value={registrationData.email}
            onChange={handleChange}
            placeholder="Email"
            required
          />
          <input
            type="tel"
            name="phone"
            value={registrationData.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            required
          />
          <select
            name="wantedPlanet"
            value={registrationData.wantedPlanet}
            onChange={handleChange}
            required
          >
            <option value="">Select a Planet</option>
            <option value="Mercury">Mercury</option>
            <option value="Venus">Venus</option>
            <option value="Earth">Earth</option>
            <option value="Jupiter">Jupiter</option>
            <option value="Saturn">Saturn</option>
            <option value="Uranus">Uranus</option>
            <option value="Neptune">Neptune</option>
           
            {/* Add options for each planet */}
          </select>
          <label htmlFor="departureDate" className="date-label">Pick the desired date</label>
          <input
            type="date"
            name="departureDate"
            value={registrationData.departureDate}
            onChange={handleChange}
            className="date-input" // Added class name for targeting
            required
          />
           <label htmlFor="numberDays" className="days-label">Pick the number of days</label>
          <input
            type="number"
            name="numberOfDays"
            value={registrationData.numberOfDays}
            onChange={handleChange}
            min="1"
            placeholder="Number of Days"
            className="number-of-days-input" // Added class for styling
            required
          />
         <div className="passenger-control">
  <label htmlFor="numberOfPassengers">Number of Passengers</label>
  <div className="passenger-input-control">
    <button type="button" onClick={decrementPassengers}>-</button>
    <input
      type="number"
      id="numberOfPassengers"
      name="numberOfPassengers"
      value={registrationData.numberOfPassengers}
      onChange={handleChange}
      min="1"
      required
    />
    <button type="button" onClick={incrementPassengers}>+</button>
  </div>
</div>
{/* Gender Selector */}
<div className="gender-selector">
 
  <select 
    name="gender" 
    value={registrationData.gender}
    onChange={handleChange}
    required
  >
    <option value="">Select Gender</option>
    <option value="Male">Male</option>
    <option value="Female">Female</option>
    <option value="Other">Other</option>
  </select>
</div>

          <select
            name="tripClass"
            value={registrationData.tripClass}
            onChange={handleChange}
            required
          >
            <option value="">Select Class</option>
            <option value="economic">Economic</option>
            <option value="firstClass">First Class</option>
          </select>
          <select
            name="accommodation"
            value={registrationData.accommodation}
            onChange={handleChange}
            required
          >
            <option value="">Select Accommodation</option>
            <option value="standard">Standard</option>
            <option value="lux">Luxury</option>
          </select>
          <label>
            Pet Companion:
            <input
              type="checkbox"
              name="petCompanion"
              checked={registrationData.petCompanion}
              onChange={handleChange}
            />
          </label>
          <span>Price: {registrationData.price}</span>
          <button type="submit">Submit Registration</button>
        </form>
      </div>
    </div>
  );
};

export default User;

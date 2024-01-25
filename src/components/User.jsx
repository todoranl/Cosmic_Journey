import React, { useState, useEffect } from 'react';
import { db } from './firebase-config';
import { collection, addDoc } from 'firebase/firestore';
import '../styles/Form.css';
import { getAnalytics, logEvent } from 'firebase/analytics';
const petsData = [
  { name: "Foxy", imageUrl: "https://firebasestorage.googleapis.com/v0/b/cosmicjourney-dab3e.appspot.com/o/pets%2FFoxy.jfif?alt=media&token=687eff2f-b2ea-471c-814a-64e1bc680e09" },
   { name: "Pepper", imageUrl: "https://firebasestorage.googleapis.com/v0/b/cosmicjourney-dab3e.appspot.com/o/pets%2FPepper.jfif?alt=media&token=7ebd14fe-2f3d-4af2-aa35-3597997bd6f7" },
  { name: "Joy", imageUrl: "https://firebasestorage.googleapis.com/v0/b/cosmicjourney-dab3e.appspot.com/o/pets%2FJoy.jfif?alt=media&token=d22e9285-91f6-46db-bf79-22f0823dc8d4" },
  { name: "Luna", imageUrl: "https://firebasestorage.googleapis.com/v0/b/cosmicjourney-dab3e.appspot.com/o/pets%2FLuna.jfif?alt=media&token=dd2f1981-33f6-4a9c-bf4f-0d1a35a2c6fe" },
  { name: "Severus", imageUrl: "https://firebasestorage.googleapis.com/v0/b/cosmicjourney-dab3e.appspot.com/o/pets%2FSeverus.jfif?alt=media&token=99092aa9-8d56-4f5e-8626-d781d10e1ec7" },
  { name: "Simba", imageUrl: "https://firebasestorage.googleapis.com/v0/b/cosmicjourney-dab3e.appspot.com/o/pets%2FSimba.jfif?alt=media&token=fcd830d2-4d8f-42ff-93e6-c7220f4935ee" },
  { name: "Star", imageUrl: "https://firebasestorage.googleapis.com/v0/b/cosmicjourney-dab3e.appspot.com/o/pets%2FStar.jfif?alt=media&token=99245eed-90f1-40c1-b77c-2cbd2fe60245" },
  { name: "Timmy", imageUrl: "https://firebasestorage.googleapis.com/v0/b/cosmicjourney-dab3e.appspot.com/o/pets%2FTimmy.jpg?alt=media&token=969dfe54-5bcc-4a79-a1a1-45bf7ced30c8" },
  { name: "Vanilla", imageUrl: "https://firebasestorage.googleapis.com/v0/b/cosmicjourney-dab3e.appspot.com/o/pets%2FVanilla.jfif?alt=media&token=3d41842f-3b86-4e2b-b38d-19f9bf68f31c" },

  // ...add other pets
];


const User = () => {
  const planetPrices = {
    Mercury: 21000,
    Venus: 42000,
    Earth: 10000,
    Mars: 40000,
    Jupiter: 73000,
    Saturn: 120000,
    Uranus: 83520,
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
  
  const [registrationData, setRegistrationData,] = useState({
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
  const [selectedPet, setSelectedPet] = useState('');
   // Function to handle pet selection
   const handlePetSelection = (petName) => {
    setSelectedPet(petName);
    console.log("Selected Pet: ", petName);
  };
  
  // Function to update price
  const updatePrice = () => {
    let basePrice = planetPrices[registrationData.wantedPlanet] || 0;
    let classMultiplier = classPriceMultiplier[registrationData.tripClass] || 1;
    let accommodationPricePerDay = accommodationPrices[registrationData.accommodation] || 0;
    let totalAccommodationCost = accommodationPricePerDay * registrationData.numberOfDays;
    let finalPrice = ((basePrice * classMultiplier) + totalAccommodationCost) * registrationData.numberOfPassengers;
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
  }, [registrationData.wantedPlanet, registrationData.tripClass, registrationData.numberOfPassengers, registrationData.accommodation, registrationData.numberOfDays]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setRegistrationData(prevState => ({
      ...prevState,
      [name]: type === 'number' ? parseInt(value, 10) : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formData = {
      ...registrationData,
      petCompanion: selectedPet, // Add the selected pet's name
      price: Number(registrationData.price)
    };
  

    try {
      

      const docRef = await addDoc(collection(db, "registrations"), formData);
    console.log("Document written with ID: ", docRef.id);
        
    
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
   // Show a simple alert for successful submission
   alert("Thank you for your reservation. We will contact you shortly to finalize the details of your cosmic journey.");

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
      setSelectedPet(''); // Reset the selected pet
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  return (
    
    <div className="planet-page">
      
      <div className="registration-form">
        <span>Register for Your Journey Now</span>
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
            <option value="Mars">Mars</option>
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
            {/* Pet Selection */}
          {/* Pet Selection Section */}
          <div className="pet-selection">
  {petsData.map(pet => (
    <div
      key={pet.name}
      className={`pet-thumbnail ${selectedPet === pet.name ? 'selected' : ''}`}
      onClick={() => handlePetSelection(pet.name)}
    >
      <img src={pet.imageUrl} alt={pet.name} className="pet-image" />
      <p>{pet.name}</p>
    </div>
  ))}
</div>

          <span>Price: {registrationData.price}$</span>
        
          <button type="submit">Submit Registration</button>
        </form>
      </div>
      
    </div>
    
  );
};

export default User;

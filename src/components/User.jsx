import React, { useState } from 'react';
import ItemThumbnailsDemo from '../components/ItemThumbnailsDemo';

import { db, auth } from './firebase-config';

// Ensure you have this export in your firebase-config.js
import { collection, addDoc } from 'firebase/firestore';
import '../styles/Planets.css';

const User = () => {
  // ...existing code...

  // State for the registration form
  const [registrationData, setRegistrationData] = useState({
    fullName: '',
    email: '',
    experienceLevel: '', // Example field
    // Add other registration fields as necessary
  });

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegistrationData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const docRef = await addDoc(collection(db, "registrations"), registrationData);
      console.log("Document written with ID: ", docRef.id);
      // Reset form or show a success message
      setRegistrationData({
        Name: '',
        surName: '',
        email: '',
        experienceLevel: '',
        // Reset other fields
      });
    } catch (error) {
      console.error("Error adding document: ", error);
      // Handle the error, e.g., show error message
    }
  };

  return (
    <div className="planet-page">
      {/* ...existing code... */}
      
      {/* Add a registration form */}
      <div className="registration-form">
        <h2>Register for Your Journey Now</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="Name"
            value={registrationData.Name}
            onChange={handleChange}
            placeholder=" Name"
            required
          />
          <input
            type="text"
            name="SurName"
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
          {/* Add other form fields here */}
          <select
            name="experienceLevel"
            value={registrationData.experienceLevel}
            onChange={handleChange}
            required
          >
            <option value="">Select Experience Level</option>
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="expert">Expert</option>
          </select>
          {/* More fields can be added here */}
          <button type="submit">Submit Registration</button>
        </form>
      </div>
    </div>
  );
};

export default User;

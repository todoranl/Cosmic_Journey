import React, { useState } from "react";
import "./BookingForm.css"; // Ensure this CSS file contains all the necessary styles.

function BookingForm() {
  const [destination, setDestination] = useState("");
  const [passengers, setPassengers] = useState(1);
  const [departureDate, setDepartureDate] = useState("");

  const planets = [
    "Mercury",
    "Venus",
    "Earth",
    "Mars",
    "Jupiter",
    "Saturn",
    "Uranus",
    "Neptune",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      `Booking to ${destination} for ${passengers} passengers on ${departureDate}`
    );
    // Here you would handle the submission of the form to your backend service.
  };

  return (
    <form onSubmit={handleSubmit} className="booking-form">
      <div className="form-group">
        <label htmlFor="destination">Destination:</label>
        <select
          id="destination"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          className="form-control"
        >
          <option value="">Select a planet</option>
          {planets.map((planet) => (
            <option key={planet} value={planet}>
              {planet}
            </option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="passengers">Passengers:</label>
        <input
          id="passengers"
          type="number"
          value={passengers}
          onChange={(e) => setPassengers(e.target.value)}
          min="1"
          className="form-passengers"
        />
      </div>

      <div className="form-group">
        <label htmlFor="departureDate">Departure:</label>
        <input
          id="departureDate"
          type="date"
          value={departureDate}
          onChange={(e) => setDepartureDate(e.target.value)}
          className="form-departure"
        />
      </div>

      <div className="button-container">
        <button type="submit" className="btn btn-red">
          Book Now
        </button>
      </div>
    </form>
  );
}

export default BookingForm;

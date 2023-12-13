import React, { useState } from "react";
import "./BookingForm.css";

function BookingForm() {
  const [destination, setDestination] = useState("");
  const [passengers, setPassengers] = useState(1);
  const [departureDate, setDepartureDate] = useState("");

  const handleDestinationChange = (e) => {
    setDestination(e.target.value);
  };

  const handlePassengersChange = (e) => {
    setPassengers(e.target.value);
  };

  const handleDepartureDateChange = (e) => {
    setDepartureDate(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement booking logic or API call here
    console.log(
      `Booking to ${destination} for ${passengers} passengers on ${departureDate}`
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Where:
          <select value={destination} onChange={handleDestinationChange}>
            <option value="">Select a planet</option>
            <option value="Mercury">Mercury</option>
            <option value="Venus">Venus</option>
            <option value="Earth">Earth</option>
            <option value="Mars">Mars</option>
            <option value="Jupiter">Jupiter</option>
            <option value="Saturn">Saturn</option>
            <option value="Uranus">Uranus</option>
            <option value="Neptune">Neptune</option>
          </select>
        </label>
      </div>
      <div>
        <label>
          Passengers:
          <input
            type="number"
            value={passengers}
            onChange={handlePassengersChange}
            min="1"
          />
        </label>
      </div>
      <div>
        <label>
          Departure:
          <input
            type="date"
            value={departureDate}
            onChange={handleDepartureDateChange}
          />
        </label>
      </div>
      <div>
        <button type="submit">Book Now</button>
      </div>
    </form>
  );
}

export default BookingForm;

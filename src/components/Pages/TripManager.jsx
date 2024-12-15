import React, { useState, useEffect } from "react";

function TripManager() {
  const [trips, setTrips] = useState(() => {
    const savedTrips = localStorage.getItem("trips");
    return savedTrips ? JSON.parse(savedTrips) : [];
  });

  const [currentTrip, setCurrentTrip] = useState(null);
  const [newTripName, setNewTripName] = useState("");

  const addTrip = (tripName) => {
    if (tripName.trim()) {
      const updatedTrips = [...trips, tripName];
      setTrips(updatedTrips);
      localStorage.setItem("trips", JSON.stringify(updatedTrips));
      setNewTripName("");
    }
  };

  const handleRemoveTrip = (index) => {
    const updatedTrips = trips.filter((_, i) => i !== index);
    setTrips(updatedTrips);
    localStorage.setItem("trips", JSON.stringify(updatedTrips));
    if (currentTrip === trips[index]) {
      setCurrentTrip(null);
      localStorage.removeItem("currentTrip");
    }
  };

  const handleTripClick = (trip) => {
    setCurrentTrip(trip);
    localStorage.setItem("currentTrip", trip);
  };

  useEffect(() => {
    const savedCurrentTrip = localStorage.getItem("currentTrip");
    if (savedCurrentTrip) {
      setCurrentTrip(savedCurrentTrip);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    addTrip(newTripName);
  };

  return (
    <section className="trip-management">
      <h1>Manage Trips</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Trip Name"
          value={newTripName}
          onChange={(e) => setNewTripName(e.target.value)}
          className="form"
        />
        <button type="submit" className="btn1">Add Trip</button>
      </form>
      <h2>Current Trip: {currentTrip || "None selected"}</h2>
      <ul className="list">
        {trips.map((trip, index) => (
          <li key={index} className="trip-item">
            <span onClick={() => handleTripClick(trip)}>{trip}</span>
            <button
              className="remove-btn"
              onClick={() => handleRemoveTrip(index)}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default TripManager;

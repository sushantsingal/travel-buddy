import React, { useState, useEffect } from "react";

function Itinerary() {

  const [itinerary, setItinerary] = useState(() => {
    const savedItinerary = localStorage.getItem("itinerary");
    return savedItinerary ? JSON.parse(savedItinerary) : [];
  });

  const [newItineraryItem, setNewItineraryItem] = useState("");

  const addItineraryItem = (item) => {
    if (item.trim()) {
      const updatedItinerary = [...itinerary, item];
      setItinerary(updatedItinerary);
      localStorage.setItem("itinerary", JSON.stringify(updatedItinerary));
      setNewItineraryItem("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addItineraryItem(newItineraryItem);
  };

  const deleteItineraryItem = (index) => {
    const updatedItinerary = itinerary.filter((_, i) => i !== index);
    setItinerary(updatedItinerary);
    localStorage.setItem("itinerary", JSON.stringify(updatedItinerary));
  };


  useEffect(() => {
    const savedItinerary = localStorage.getItem("itinerary");
    if (savedItinerary) {
      setItinerary(JSON.parse(savedItinerary));
    }
  }, []);

  return (
    <section className="itinerary">
      <h1>Itinerary</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Itinerary Item"
          value={newItineraryItem}
          onChange={(e) => setNewItineraryItem(e.target.value)}
          className="form"
        />
        <button type="submit" className="btn1">Add Item</button>
      </form>
      <ul className="list">
        {itinerary.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => deleteItineraryItem(index)} className="btn2">Delete</button>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Itinerary;

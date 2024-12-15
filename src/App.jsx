import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Pages/Home";
import TripManager from "./components/Pages/TripManager";
import ExpenseTracker from "./components/Pages/ExpenseTracker";
import ToDoList from "./components/Pages/ToDoList";
import Itinerary from "./components/Pages/Itinerary";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark";
    setTheme(savedTheme);
    document.body.className = savedTheme === "light" ? "light-theme" : "dark-theme";
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.body.className = newTheme === "light" ? "light-theme" : "dark-theme";
  };

  return (
    <Router>
      <div className={`App ${theme}`}>
        <header>
          <Navbar theme={theme} toggleTheme={toggleTheme} />
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/expense" element={<ExpenseTracker />} />
            <Route path="/todo" element={<ToDoList />} />
            <Route path="/itinerary" element={<Itinerary />} />
            <Route path="/tripmanager" element={<TripManager />} />
          </Routes>
        </main>

        <footer>
          <Footer theme={theme} />
        </footer>
      </div>
    </Router>
  );
}

export default App;

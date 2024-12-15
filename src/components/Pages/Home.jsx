import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
        const navigate = useNavigate();
    return (
        <div className="home">
            <h1>Turn Dreams into Destinations – Plan, Track, and Travel Effortlessly!</h1>
            <button className="home-btn1" onClick={() => navigate("/tripmanager")}>
            Get Started
            </button>
            <button className="home-btn2" onClick={() => navigate("/")}>
            Learn More
            </button>
        </div>
    ) 
}

export default Home;
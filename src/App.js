import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Login";
import LandingPage from "./components/LandingPage";
import TopMoviePage from "./components/TopMoviePage";
import ProfilePage from "./components/ProfilePage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MovieList from "./components/MovieList";
import MovieDetailPage from "./components/MovieDetailPage"; // Import MovieDetailPage

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false); // State for managing loading screen

  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn");
    if (loggedIn === "true") {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = () => {
    setLoading(true); // Set loading to true when login is attempted
    setTimeout(() => {
      setIsLoggedIn(true);
      localStorage.setItem("isLoggedIn", "true"); // Store login state in localStorage
      setLoading(false); // Set loading to false after the simulated delay
    }, 1800); // Simulating a 1.8-second loading screen
  };

  const handleLogout = () => {
    setLoading(true); // Set loading to true when logout is attempted
    setTimeout(() => {
      setIsLoggedIn(false);
      localStorage.removeItem("isLoggedIn"); // Clear the login state from localStorage
      setLoading(false); // Set loading to false after the simulated delay
    }, 1800); // Simulating a 1.8-second loading screen
  };

  return (
    <div className="bg-chocolate4">
      {isLoggedIn && <Navbar onLogout={handleLogout} />}
      
      {/* Show loading screen if logged in */}
      {loading ? (
        <div className="flex items-center justify-center h-screen">
          <div className="text-center">
            <img
              src="https://media1.tenor.com/m/r-BEFTSqresAAAAd/reverse-peace-out.gif"
              alt="loading"
              className=""
            />
            <p className="mt-4 text-lg text-gray-600">Please wait...</p>
          </div>
        </div>
      ) : (
        <Routes className="bg-">
          <Route
            path="/login"
            element={isLoggedIn ? <Navigate to="/landing" /> : <Login onLogin={handleLogin} />}
          />
          <Route
            path="/landing"
            element={isLoggedIn ? <LandingPage /> : <Navigate to="/login" />}
          />
          <Route
            path="/top-movies"
            element={isLoggedIn ? <TopMoviePage /> : <Navigate to="/login" />}
          />
          <Route
            path="/profile"
            element={isLoggedIn ? <ProfilePage /> : <Navigate to="/login" />}
          />
          <Route
            path="/movies"
            element={isLoggedIn ? <MovieList /> : <Navigate to="/login" />}
          />
          {/* Movie detail route */}
          <Route
            path="/movie/:id"
            element={isLoggedIn ? <MovieDetailPage /> : <Navigate to="/login" />}
          />
          <Route path="/" element={<Navigate to="/login" />} />
        </Routes>
      )}

      {isLoggedIn && <Footer />}
    </div>
  );
}

export default App;

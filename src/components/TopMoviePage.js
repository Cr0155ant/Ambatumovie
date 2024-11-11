import React, { useState, useEffect } from "react";
import axios from "axios";
import MovieCard from "./MovieCard"; // Import MovieCard component

const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = "69fc3547e06f1c6cb2b7100a55b6ed18"; // Your API key

const TopMoviePage = () => {
  const [topMovies, setTopMovies] = useState([]);
  const [loading, setLoading] = useState(true); // State to track loading status

  useEffect(() => {
    const fetchTopMovies = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/movie/top_rated?api_key=${API_KEY}`);
        
        // Simulate a delay (e.g., 3 seconds) for loading phase
        setTimeout(() => {
          const sortedMovies = response.data.results.sort((a, b) => b.vote_average - a.vote_average);
          setTopMovies(sortedMovies);
          setLoading(false); // Set loading to false after the delay
        }, 1000); // Simulate 3 seconds of loading time
      } catch (error) {
        console.error("Error fetching top-rated movies", error);
        setLoading(false); // In case of error, stop loading
      }
    };

    fetchTopMovies();
  }, []);

  return (
    <div className="grid grid-cols-1 gap-6 p-3">
      <div className="min-h-[84vh]">
        <h2 className="mb-3 text-2xl font-bold text-center">Top Rated Movies</h2>

        {loading ? (
          <div className="fixed top-1/4 relative mx-auto w-full justify-center text-center items-center">
          <img
            src="https://media1.tenor.com/m/ZBtJFtWJeFYAAAAd/ga-logis-ambatukam.gif"
            alt="loading"
            className="w-16 h-16 mx-auto"
          />
          <p className="ml-4 text-lg text-gray-600">Loading movies...</p>
        </div>
        ) : topMovies.length > 0 ? (
          <div className="grid grid-cols-2 gap-5">
            {topMovies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        ) : (
          <p className="text-xl text-center text-gray-500">No movies available</p>
        )}
      </div>
    </div>
  );
};

export default TopMoviePage;

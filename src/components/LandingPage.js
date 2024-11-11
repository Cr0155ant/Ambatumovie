import React, { useState, useEffect } from "react";
import axios from "axios";
import MovieCard from "./MovieCard"; // Import the MovieCard component

const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = "69fc3547e06f1c6cb2b7100a55b6ed18";

function LandingPage() {
    const [trendingMovies, setTrendingMovies] = useState([]);
    const [topMovies, setTopMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchMovies = async() => {
            try {
                // Fetch trending movies
                const trendingResponse = await axios.get(
                    `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`
                );
                setTimeout(() => {
                    setTrendingMovies(trendingResponse.data.results.slice(0, 4));
                }, 1000);

                // Fetch top-rated movies
                const topRatedResponse = await axios.get(
                    `${BASE_URL}/movie/top_rated?api_key=${API_KEY}`
                );
                setTimeout(() => {
                    setTopMovies(topRatedResponse.data.results.slice(0, 4)); // Get top 4 top-rated movies
                }, 1000);
                
                // Set loading to false after fetching the data
                setLoading(false);
            } catch (error) {
                console.error("Error fetching movies", error);
                setLoading(false); // Stop loading even on error
            }
        };

        fetchMovies();
    }, []);

    return (
        <div>
            {/* Loading state with fixed positioning */}
            {loading && (
                <div className="fixed inset-0 flex justify-center items-center bg-opacity-50 z-50">
                    
                </div>
            )}

            <div className="grid grid-cols-1 gap-6 p-3">
                <div className="min-h-screen">
                    <h2 className="mb-3 text-2xl font-bold text-center">Trending Movies</h2>
                    {trendingMovies.length > 0 ? (
                        <div className="grid grid-cols-2 gap-5">
                            {trendingMovies.map((movie) => (
                                <MovieCard key={movie.id} movie={movie} />
                            ))}
                        </div>
                    ) : (
                       <div className="pt-[21vh] text-center">
                        <img
                            src="https://media1.tenor.com/m/ZBtJFtWJeFYAAAAd/ga-logis-ambatukam.gif"
                            alt="loading"
                            className="w-16 h-16 mx-auto"
                        />
                        <p className="text-lg text-gray-600 ml-4 ">Loading movies...</p>
                    </div>
                    )}
                </div>
            </div>

            <div className="grid grid-cols-1 gap-6 p-3">
                <div>
                    <h2 className="mb-3 text-2xl font-bold text-center">Top Rated Movies</h2>
                    {topMovies.length > 0 ? (
                        <div className="grid grid-cols-2 gap-5">
                            {topMovies.map((movie) => (
                                <MovieCard key={movie.id} movie={movie} />
                            ))}
                        </div>
                    ) : (
                        <div className="pt-[21vh] text-center">
                        <img
                            src="https://media1.tenor.com/m/ZBtJFtWJeFYAAAAd/ga-logis-ambatukam.gif"
                            alt="loading"
                            className="w-16 h-16 mx-auto"
                        />
                        <p className="text-lg text-gray-600 ml-4  ">Loading movies...</p>
                    </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default LandingPage;

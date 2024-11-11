import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom"; // To get the movie ID from the URL

const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = "69fc3547e06f1c6cb2b7100a55b6ed18"; // Your API key

const MovieDetailPage = () => {
  const { id } = useParams(); // Get the movie ID from the URL
  const [movieDetails, setMovieDetails] = useState(null);
  const [movieCredits, setMovieCredits] = useState(null);
  const [trailer, setTrailer] = useState(null); // State for the trailer
  const [loading, setLoading] = useState(true); // State for loading indicator

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        // Simulate a delay of 1000ms (1 second) before showing the loading
        setTimeout(async () => {
          // Fetch movie details
          const movieResponse = await axios.get(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`);
          setMovieDetails(movieResponse.data);

          // Fetch movie credits (cast and crew)
          const creditsResponse = await axios.get(`${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}`);
          setMovieCredits(creditsResponse.data);

          // Fetch movie trailers
          const trailerResponse = await axios.get(`${BASE_URL}/movie/${id}/videos?api_key=${API_KEY}`);
          const trailerData = trailerResponse.data.results.find(video => video.type === "Trailer");
          if (trailerData) {
            setTrailer(trailerData.key); // Store trailer key
          }

          setLoading(false); // Set loading to false after data is fetched
        }, 1000);
      } catch (error) {
        console.error("Error fetching movie details", error);
        setLoading(false); // Set loading to false in case of an error
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (loading) return (
    <div className="h-[100vh] top-1/4 relative mx-auto w-full justify-center text-center items-center">
      <img
        src="https://media1.tenor.com/m/ZBtJFtWJeFYAAAAd/ga-logis-ambatukam.gif"
        alt="loading"
        className="w-16 h-16 mx-auto mt-[25vh] top-1/4"
      />
      <p className="ml-4 text-lg text-gray-600">Loading movies...</p>
    </div>
  );

  // Extract the release year from the release_date
  const releaseYear = movieDetails.release_date ? new Date(movieDetails.release_date).getFullYear() : "N/A";

  return (
    <div className="p-5 ">
      <h2 className="mb-2 text-3xl font-bold">{movieDetails.title}</h2>
      <img 
        src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`} 
        alt={movieDetails.title} 
        className="mx-auto rounded-lg shadow-lg h-[40vh]" 
      />
      <div className="grid grid-cols-1 gap-2">
        <h3 className="text-lg font-bold">Overview</h3>
        <p className="text-justify">{movieDetails.overview}</p>

        <h3 className="text-lg font-bold">Rating</h3>
        <p>{movieDetails.vote_average} / 10</p>

        <h3 className="text-lg font-bold">Release Year</h3>
        <p>{releaseYear}</p> {/* Display the release year */}

        {trailer && (
          <div className="movie-trailer">
            <h3 className="text-lg font-bold">Trailer</h3>
            <iframe 
              className="w-full h-[30vh] rounded-lg shadow-lg"
              src={`https://www.youtube.com/embed/${trailer}`} 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>
        )}

        <h3 className="text-lg font-bold">Cast</h3>
        <ul className="grid grid-cols-3 gap-4">
          {movieCredits.cast.slice(0, 6).map((cast) => (
            <li className="p-3 bg-white rounded-xl" key={cast.cast_id}>
              {cast.profile_path && (
                <img 
                  src={`https://image.tmdb.org/t/p/w500${cast.profile_path}`} 
                  alt={cast.name} 
                  className="rpuded-lg" 
                />
              )}
              {cast.name} as {cast.character}
            </li>
          ))}
        </ul>

        <h3 className="text-lg font-bold">Producer</h3>
        <ul className="grid grid-cols-3 gap-4">
          {movieCredits.crew
            .filter((person) => person.job === "Producer")
            .map((producer) => (
              <li className="p-3 bg-white rounded-xl" key={producer.credit_id}>
                {producer.profile_path && (
                  <img 
                    src={`https://image.tmdb.org/t/p/w500${producer.profile_path}`} 
                    alt={producer.name} 
                    className="producer-image" 
                  />
                )}
                {producer.name}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default MovieDetailPage;

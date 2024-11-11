import React from "react";
import { useNavigate } from "react-router-dom";

const MovieCard = ({ movie }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/movie/${movie.id}`);
  };

  const releaseYear = movie.release_date
    ? new Date(movie.release_date).getFullYear()
    : "N/A";

  // Get the first 50 characters of the overview or "N/A" if not available
  const shortOverview = movie.overview
    ? movie.overview.substring(0, 50)
    : "No description available";

  return (
    <div
      className="grid grid-rows-3 p-5 bg-white rounded-lg shadow-lg"
      onClick={handleClick}
    >
      <div className="row-span-2">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="w-[30vh] relative rounded-lg mx-auto mb-3"
        />
        <h3 className="text-xl font-bold "> {movie.title} </h3>{" "}
      </div>{" "}
      <div className="max-h-fit space-y-auto">
        <p className="italic">
          {" "}
          {shortOverview} {movie.overview.length > 50 && "..."}{" "}
        </p>{" "}
        <p>
          {" "}
          <strong> Release Year: </strong> {releaseYear}{" "}
        </p>{" "}
      </div>{" "}
    </div>
  );
};

export default MovieCard;

import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import { FaHome, FaFilm, FaListAlt, FaUser } from 'react-icons/fa'; // Importing icons

const Footer = () => {
    return (
        <div className="sticky bottom-0 left-0 w-full p-2 text-center items-center text-chocolate4 h-[8vh] py-2 bg-chocolate1 z-50">
            <div className="px-6 mx-auto">
                {/* Links Section with Icons */}
                <div className="grid items-center grid-cols-4">
                    <Link to="/landing"
                        className="flex flex-col items-center justify-center mx-auto text-xl text-center transition-colors hover:text-black"
                        aria-label="Home">
                        <FaHome />
                        <h1 className="mt-2 text-sm">Home</h1>
                    </Link>

                    <Link to="/top-movies"
                        className="flex flex-col items-center justify-center mx-auto text-xl transition-colors hover:text-black"
                        aria-label="Top Movies">
                        <FaFilm />
                        <h1 className="mt-2 text-sm">Top Movies</h1>
                    </Link>

                    <Link to="/movies"
                        className="flex flex-col items-center justify-center mx-auto text-xl transition-colors hover:text-black"
                        aria-label="Movie List">
                        <FaListAlt />
                        <h1 className="mt-2 text-sm">Movie List</h1>
                    </Link>

                    <Link to="/profile"
                        className="flex flex-col items-center justify-center mx-auto text-xl transition-colors hover:text-black"
                        aria-label="Profile">
                        <FaUser />
                        <h1 className="mt-2 text-sm">Profile</h1>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Footer;

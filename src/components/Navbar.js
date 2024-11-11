import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation

const Navbar = () => {
  return (
    <div className="sticky z-50 top-0 h-[6vh] w-full bg-chocolate2 flex items-center justify-center">
      <div className="w-full text-4xl italic font-bold text-white p-7">
        Ambatumovie
      </div>
    </div>
  );
};

export default Navbar;

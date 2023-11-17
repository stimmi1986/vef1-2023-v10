import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-gray-800 text-white shadow-md px-10">
      <div className="container mx-auto px-10 py-3 flex justify-between items-center">
        <Link to="/" className="text-3xl font-bold tracking-wider">
          🏀NBA
        </Link>
        <div className="flex space-x-6">
          <Link to="/teams" className="text-lg hover:text-gray-300 transition duration-300 ease-in-out">
            Teams
          </Link>
          <Link to="/games" className="text-lg hover:text-gray-300 transition duration-300 ease-in-out">
            Games
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

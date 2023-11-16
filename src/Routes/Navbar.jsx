import React from 'react';

function Navbar() {
  return (
    <nav className="bg-gray-800 text-white shadow-md px-10">
      <div className="container mx-auto px-10 py-3 flex justify-between items-center">
        <a href="/" className="text-3xl font-bold tracking-wider">
          🏀NBA
        </a>
        <div className="flex space-x-6">
          <a href="/teams" className="text-lg hover:text-gray-300 transition duration-300 ease-in-out">
            Teams
          </a>
          <a href="/games" className="text-lg hover:text-gray-300 transition duration-300 ease-in-out">
            Games
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

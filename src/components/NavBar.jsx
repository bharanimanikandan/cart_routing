import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ cartCount }) => {
  return (
    <nav className="bg-gray-800 p-4 text-white flex justify-between items-center">
      <Link to="/" className="text-2xl">E-Com Store</Link>
      <div className="flex space-x-4">
        <Link to="/" className="text-lg bg-blue-500 py-2 px-4 rounded">Home</Link>
        <Link to="/cart" className="text-lg bg-blue-500 py-2 px-4 rounded">
          Cart ({cartCount})
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;



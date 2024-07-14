import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <nav className="bg-slate-400 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-gray-950 text-3xl font-bold ">RIZON SERVICES</div>
        <div>
          <Link to="/dashboard" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-xl font-medium ">Dashboard</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
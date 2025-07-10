import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => (
  <header className="bg-white shadow" data-aos="fade-down">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-4">
      <Link to="/" className="text-2xl font-bold text-gray-900">
        Sobha Constructions
      </Link>
      <nav>
        <ul className="flex space-x-6">
          <li>
            <NavLink to="/" className={({ isActive }) => isActive ? "text-black font-bold" : "text-gray-600"}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects" className={({ isActive }) => isActive ? "text-black font-bold" : "text-gray-600"}>
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink to="/company-overview" className={({ isActive }) => isActive ? "text-black font-bold" : "text-gray-600"}>
              Company Overview
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={({ isActive }) => isActive ? "text-black font-bold" : "text-gray-600"}>
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
);

export default Header;

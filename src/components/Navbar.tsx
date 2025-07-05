import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const linkClasses = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? 'font-semibold text-blue-600'
      : 'text-gray-700 hover:text-blue-600';

  return (
    <nav className="bg-white shadow fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto py-4 flex items-center justify-between px-4">
        <NavLink to="/" className="text-xl font-bold text-blue-600">
          MyTailwindWebsite
        </NavLink>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-700 focus:outline-none"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Desktop menu */}
        <div className="hidden md:flex space-x-4">
          <NavLink to="/" className={linkClasses}>Home</NavLink>
          <NavLink to="/about" className={linkClasses}>About Us</NavLink>
          <NavLink to="/contact" className={linkClasses}>Contact</NavLink>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 flex flex-col items-end gap-2">
          <NavLink to="/" className={linkClasses} onClick={() => setMenuOpen(false)}>Home</NavLink>
          <NavLink to="/about" className={linkClasses} onClick={() => setMenuOpen(false)}>About Us</NavLink>
          <NavLink to="/contact" className={linkClasses} onClick={() => setMenuOpen(false)}>Contact</NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

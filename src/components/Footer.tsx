// ✅ 6. src/components/Footer.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white text-center py-6 px-4 sm:px-6 mt-12">
      <div className="container mx-auto py-2 flex items-center justify-center">
        <Link to="/" className="text-xl font-bold text-white">MyTailwindWebsite</Link>
      </div>

      <div className="flex flex-col sm:flex-row sm:space-x-24 justify-center items-center py-6 space-y-4 sm:space-y-0">
        <Link to="/" className="hover:underline cursor-pointer">Home</Link>
        <Link to="/about" className="hover:underline cursor-pointer">About Us</Link>
        <Link to="/contact" className="hover:underline cursor-pointer">Contact Us</Link>
      </div>

      <hr className="border-t border-gray-600 mx-auto w-full mb-4" />
      <p className="pt-2 text-sm">© 2025 MyTailwindWebsite. Lorem Ipsum Is A Dummy Text.</p>
    </footer>
  );
};

export default Footer;
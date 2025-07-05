// ✅ 17. src/components/AboutSection.tsx (for Home page)
import React from 'react';

interface AboutProps {
  para1: string;
  para2: string;
  image: string;
}

const AboutSection: React.FC<AboutProps> = ({ para1, para2, image }) => {
  return (
    <section className="container py-12 mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center gap-y-8 md:gap-x-12 py-8">
        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold mb-4 text-gray-800">About Us</h2>
          <p className="text-gray-600 mb-4">{para1}</p>
          <p className="text-gray-600 mb-6">{para2}</p>
          <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
            Read More
          </button>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img src={image} alt="About" className="rounded shadow-md" />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
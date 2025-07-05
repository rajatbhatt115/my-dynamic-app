// ✅ 16. src/components/Banner.tsx
import React from 'react';

interface BannerProps {
  heading: string;
  description: string;
  image: string;
}

const Banner: React.FC<BannerProps> = ({ heading, description, image }) => {
  return (
    <section
      className="relative bg-cover bg-center text-white flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 h-[40vh] sm:h-[50vh] md:h-[60vh]"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      <div className="relative z-10 text-center">
        <h1 className="text-3xl sm:text-4xl font-bold">{heading}</h1>
        <p className="mt-4 text-sm sm:text-base">{description}</p>
      </div>
    </section>
  );
};

export default Banner;

// components/WorldTimeBackground.js
import React from 'react';
import WorldTime from './world-clock';  // Ensure the import path is correct

const WorldTimeBackground = ({ timezone }) => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background image with lower z-index */}
      <img src="/world_clock.webp" alt="World Clock Background"
           className="absolute inset-0 w-full h-full object-cover z-0" style={{ opacity: 0.3 }} />

      {/* Content with higher z-index */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full">
        <WorldTime timezone={timezone} />
      </div>
    </div>
  );
};

export default WorldTimeBackground;

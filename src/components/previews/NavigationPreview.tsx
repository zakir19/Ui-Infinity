
import React from 'react';

const NavigationPreview = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <div className="w-full h-8 bg-black/40 rounded-md flex items-center px-2 mb-2">
        <div className="w-6 h-6 bg-neon-purple/50 rounded-full mr-2"></div>
        <div className="flex-1"></div>
        <div className="flex gap-2">
          <div className="w-10 h-4 bg-white/10 rounded-sm"></div>
          <div className="w-10 h-4 bg-white/10 rounded-sm"></div>
          <div className="w-10 h-4 bg-white/10 rounded-sm"></div>
        </div>
      </div>
      <div className="flex gap-1">
        <div className="h-5 w-5 bg-white/10 rounded-sm"></div>
        <div className="h-5 w-5 bg-neon-purple/50 rounded-sm"></div>
        <div className="h-5 w-5 bg-white/10 rounded-sm"></div>
      </div>
    </div>
  );
};

export default NavigationPreview;

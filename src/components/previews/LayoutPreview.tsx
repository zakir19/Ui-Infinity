
import React from 'react';

const LayoutPreview = () => {
  return (
    <div className="w-full h-full flex flex-col p-1">
      <div className="w-full h-6 bg-white/10 rounded-sm mb-1"></div>
      <div className="flex-1 flex gap-1">
        <div className="w-1/3 bg-neon-purple/20 rounded-sm"></div>
        <div className="w-2/3 bg-white/10 rounded-sm"></div>
      </div>
    </div>
  );
};

export default LayoutPreview;

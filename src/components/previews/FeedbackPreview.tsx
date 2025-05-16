
import React from 'react';

const FeedbackPreview = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="h-8 w-32 bg-black/40 rounded-md border border-white/10 flex items-center justify-center gap-2 px-2">
        <div className="w-4 h-4 rounded-full bg-neon-purple/70"></div>
        <div className="text-xs text-white">Notification</div>
      </div>
    </div>
  );
};

export default FeedbackPreview;

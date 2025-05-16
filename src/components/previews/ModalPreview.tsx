
import React from 'react';
import { GlassCard } from '@/components/ui/glass-card';

const ModalPreview = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <GlassCard className="h-28 w-36 flex flex-col items-center justify-center p-3">
        <div className="w-full bg-neon-purple/20 h-5 rounded-sm mb-2"></div>
        <div className="w-full bg-white/10 h-12 rounded-sm"></div>
        <div className="flex justify-end w-full mt-2 gap-1">
          <div className="h-4 w-8 bg-white/10 rounded-sm"></div>
          <div className="h-4 w-8 bg-neon-purple/50 rounded-sm"></div>
        </div>
      </GlassCard>
    </div>
  );
};

export default ModalPreview;

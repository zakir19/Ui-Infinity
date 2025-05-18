
import React from 'react';
import { CopyButton } from '@/components/ui/copy-button';

const LayoutPreview = () => {
  const layoutCode = `<div className="w-full h-full flex flex-col p-1">
  <div className="w-full h-6 bg-white/10 rounded-sm mb-1"></div>
  <div className="flex-1 flex gap-1">
    <div className="w-1/3 bg-neon-purple/20 rounded-sm"></div>
    <div className="w-2/3 bg-white/10 rounded-sm"></div>
  </div>
</div>`;

  return (
    <div className="w-full h-full flex flex-col p-1 group relative">
      <CopyButton code={layoutCode} className="opacity-0 group-hover:opacity-100" />
      <div className="w-full h-6 bg-white/10 rounded-sm mb-1"></div>
      <div className="flex-1 flex gap-1">
        <div className="w-1/3 bg-neon-purple/20 rounded-sm"></div>
        <div className="w-2/3 bg-white/10 rounded-sm"></div>
      </div>
    </div>
  );
};

export default LayoutPreview;

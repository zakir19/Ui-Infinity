
import React from 'react';
import { CopyButton } from '@/components/ui/copy-button';

const FormPreview = () => {
  const formCode = `<div className="w-full flex flex-col items-center justify-center">
  <div className="w-full h-6 bg-white/10 rounded-md mb-2"></div>
  <div className="w-full h-6 bg-white/10 rounded-md mb-2"></div>
  <div className="flex items-center gap-2 mb-2">
    <div className="w-4 h-4 border border-white/30 rounded-sm"></div>
    <div className="w-16 h-4 bg-white/10 rounded-md"></div>
  </div>
  <div className="w-full h-6 bg-neon-purple/50 rounded-md"></div>
</div>`;

  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-2 group relative">
      <CopyButton code={formCode} className="opacity-0 group-hover:opacity-100" />
      <div className="w-full h-6 bg-white/10 rounded-md mb-2"></div>
      <div className="w-full h-6 bg-white/10 rounded-md mb-2"></div>
      <div className="flex items-center gap-2 mb-2">
        <div className="w-4 h-4 border border-white/30 rounded-sm"></div>
        <div className="w-16 h-4 bg-white/10 rounded-md"></div>
      </div>
      <div className="w-full h-6 bg-neon-purple/50 rounded-md"></div>
    </div>
  );
};

export default FormPreview;

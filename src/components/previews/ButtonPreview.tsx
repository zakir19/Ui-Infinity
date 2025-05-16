
import React from 'react';
import { GradientBorder } from '@/components/ui/gradient-border';
import { Button } from '@/components/ui/button';

const ButtonPreview = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-2 p-2 w-full h-full">
      <Button variant="default" className="mb-1">Default</Button>
      <Button variant="outline" className="mb-1">Outline</Button>
      <Button variant="ghost" className="bg-gradient-to-r from-neon-purple to-neon-cyan text-white">
        Gradient
      </Button>
    </div>
  );
};

export default ButtonPreview;

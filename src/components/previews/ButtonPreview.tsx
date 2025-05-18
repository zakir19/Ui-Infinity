
import React from 'react';
import { GradientBorder } from '@/components/ui/gradient-border';
import { Button } from '@/components/ui/button';
import { CopyButton } from '@/components/ui/copy-button';

const ButtonPreview = () => {
  const buttonCode = `import { Button } from '@/components/ui/button';

<Button variant="default">Default</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost" className="bg-gradient-to-r from-neon-purple to-neon-cyan text-white">
  Gradient
</Button>`;

  return (
    <div className="flex flex-col items-center justify-center gap-2 p-2 w-full h-full group relative">
      <CopyButton code={buttonCode} className="opacity-0 group-hover:opacity-100" />
      <Button variant="default" className="mb-1">Default</Button>
      <Button variant="outline" className="mb-1">Outline</Button>
      <Button variant="ghost" className="bg-gradient-to-r from-neon-purple to-neon-cyan text-white">
        Gradient
      </Button>
    </div>
  );
};

export default ButtonPreview;

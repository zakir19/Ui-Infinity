
import React from 'react';
import { GradientBorder } from '@/components/ui/gradient-border';
import { Button } from '@/components/ui/button';
import { GlossyButton } from '@/components/ui/glossy-button';
import { GlassButton } from '@/components/ui/glass-button';
import { CopyButton } from '@/components/ui/copy-button';

const ButtonPreview = () => {
  const buttonCode = `import { Button } from '@/components/ui/button';
import { GlossyButton } from '@/components/ui/glossy-button';
import { GlassButton } from '@/components/ui/glass-button';

<Button variant="default">Default</Button>
<GlossyButton variant="purple">Glossy</GlossyButton>
<GlassButton variant="frosted">Glass</GlassButton>`;

  return (
    <div className="flex flex-col items-center justify-center gap-2 p-2 w-full h-full group relative">
      <CopyButton code={buttonCode} className="opacity-0 group-hover:opacity-100" />
      <Button variant="default" className="mb-1">Default</Button>
      <GlossyButton variant="purple" size="sm" className="mb-1">Glossy</GlossyButton>
      <GlassButton variant="frosted" size="sm">Glass</GlassButton>
    </div>
  );
};

export default ButtonPreview;

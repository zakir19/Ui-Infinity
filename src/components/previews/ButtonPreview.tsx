
import React from 'react';
import { GradientBorder } from '@/components/ui/gradient-border';
import { Button } from '@/components/core/Button';
import { GlossyButton } from '@/components/ui/glossy-button';
import { GlassButton } from '@/components/ui/glass-button';
import { AuroraButton } from '@/components/ui/aurora-button';
import { CopyCodeButton } from '@/components/core/CopyCodeButton';

const ButtonPreview = () => {
  const buttonCode = `import { Button } from '@/components/core/Button';
import { GlossyButton } from '@/components/ui/glossy-button';
import { GlassButton } from '@/components/ui/glass-button';
import { AuroraButton } from '@/components/ui/aurora-button';

<Button variant="default">Default</Button>
<GlossyButton variant="purple">Glossy</GlossyButton>
<GlassButton variant="frosted">Glass</GlassButton>
<AuroraButton variant="default">Aurora</AuroraButton>`;

  return (
    <div className="flex flex-col items-center justify-center gap-2 p-2 w-full h-full group relative">
      <CopyCodeButton 
        code={buttonCode} 
        className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
      />
      <Button variant="primary" className="mb-1">Primary</Button>
      <GlossyButton variant="purple" size="sm" className="mb-1">Glossy</GlossyButton>
      <GlassButton variant="frosted" size="sm" className="mb-1">Glass</GlassButton>
      <AuroraButton variant="default" size="sm">Aurora</AuroraButton>
    </div>
  );
};

export default ButtonPreview;

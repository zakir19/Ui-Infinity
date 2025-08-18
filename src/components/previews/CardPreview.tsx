
import React from 'react';
import TiltCard from '@/components/ui/tilt-card';
import { GlassCard } from '@/components/ui/glass-card';
import { CopyButton } from '@/components/ui/copy-button';

const CardPreview = () => {
  const cardCode = `import TiltCard from '@/components/ui/tilt-card';

<TiltCard className="h-24 w-32 bg-gradient-to-br from-neon-purple/20 to-neon-cyan/20 border border-white/10 flex items-center justify-center">
  <span className="text-sm font-medium">3D Card</span>
</TiltCard>`;

  return (
    <div className="w-full h-full flex items-center justify-center group relative">
      <CopyButton code={cardCode} className="opacity-0 group-hover:opacity-100" />
      <TiltCard className="h-24 w-32 bg-gradient-to-br from-neon-purple/20 to-neon-cyan/20 border border-white/10 flex items-center justify-center">
        <span className="text-sm font-medium">3D Card</span>
      </TiltCard>
    </div>
  );
};

export default CardPreview;

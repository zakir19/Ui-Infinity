
import React from 'react';
import { Sparkles } from '@/components/ui/sparkles';
import { CopyButton } from '@/components/ui/copy-button';

const EffectPreview = () => {
  const effectCode = `import { Sparkles } from '@/components/ui/sparkles';

<Sparkles>
  <span className="text-sm font-medium">✨ Effects</span>
</Sparkles>`;

  return (
    <div className="w-full h-full flex items-center justify-center group relative">
      <CopyButton code={effectCode} className="opacity-0 group-hover:opacity-100" />
      <Sparkles>
        <span className="text-sm font-medium">✨ Effects</span>
      </Sparkles>
    </div>
  );
};

export default EffectPreview;

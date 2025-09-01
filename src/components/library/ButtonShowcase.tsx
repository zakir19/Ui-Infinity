import React, { useMemo, useState } from 'react';
import { Button } from '@/lib/ui';
import { CopyCodeButton } from '@/components/core/CopyCodeButton';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/core/Card';
import { Play, Download, Heart, Settings, User, Plus } from 'lucide-react';

const ButtonShowcase = () => {
  const [loadingStates, setLoadingStates] = useState<Record<string, boolean>>({});
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const handleLoadingDemo = (buttonId: string) => {
    setLoadingStates(prev => ({ ...prev, [buttonId]: true }));
    setTimeout(() => {
      setLoadingStates(prev => ({ ...prev, [buttonId]: false }));
    }, 2000);
  };

  const variants = [
    { name: 'Primary', variant: 'primary' as const },
    { name: 'Secondary', variant: 'secondary' as const },
    { name: 'Outline', variant: 'outline' as const },
    { name: 'Ghost', variant: 'ghost' as const },
    { name: 'Danger', variant: 'danger' as const },
    { name: 'Success', variant: 'success' as const },
    { name: 'Warning', variant: 'warning' as const },
    { name: 'Neon', variant: 'neon' as const },
    { name: 'Glass', variant: 'glass' as const },
    { name: 'Gradient', variant: 'gradient' as const },
  ];

  const sizes = [
    { name: 'Extra Small', size: 'xs' as const },
    { name: 'Small', size: 'sm' as const },
    { name: 'Medium', size: 'md' as const },
    { name: 'Large', size: 'lg' as const },
    { name: 'Extra Large', size: 'xl' as const },
  ];

  const basicCode = `import { Button } from '@/lib/ui';

<Button variant="primary" size="md">
  Click me
</Button>`;

  const withIconsCode = `import { Button } from '@/lib/ui';
import { Play, Download, Heart, Plus } from 'lucide-react';

<Button variant="primary" leftIcon={<Play className="w-4 h-4" />}>
  Play Video
</Button>

<Button variant="outline" rightIcon={<Download className="w-4 h-4" />}>
  Download
</Button>

<Button variant="secondary" leftIcon={<Heart className="w-4 h-4" />} rightIcon={<Plus className="w-4 h-4" />}>
  Add to Favorites
</Button>`;

  const loadingCode = `import { Button } from '@/lib/ui';
import React from 'react';

export function Example() {
  const [loading, setLoading] = React.useState(false);
  return (
    <Button
      variant="primary"
      loading={loading}
      onClick={() => setLoading(true)}
    >
      {loading ? 'Processing...' : 'Submit'}
    </Button>
  );
}`;

  // ---------------------------------------------
  // Code Reference: every button/variation snippet
  // ---------------------------------------------
  const codeRef = {
    variants: [
      {
        title: 'Primary',
        code: `import { Button } from '@/lib/ui';

<Button variant="primary" size="md">Primary</Button>`,
      },
      {
        title: 'Secondary',
        code: `import { Button } from '@/lib/ui';

<Button variant="secondary" size="md">Secondary</Button>`,
      },
      {
        title: 'Outline',
        code: `import { Button } from '@/lib/ui';

<Button variant="outline" size="md">Outline</Button>`,
      },
      {
        title: 'Ghost',
        code: `import { Button } from '@/lib/ui';

<Button variant="ghost" size="md">Ghost</Button>`,
      },
      {
        title: 'Danger',
        code: `import { Button } from '@/lib/ui';

<Button variant="danger" size="md">Danger</Button>`,
      },
      {
        title: 'Success',
        code: `import { Button } from '@/lib/ui';

<Button variant="success" size="md">Success</Button>`,
      },
      {
        title: 'Warning',
        code: `import { Button } from '@/lib/ui';

<Button variant="warning" size="md">Warning</Button>`,
      },
      {
        title: 'Neon',
        code: `import { Button } from '@/lib/ui';

<Button variant="neon" size="md">Neon Effect</Button>`,
      },
      {
        title: 'Glass',
        code: `import { Button } from '@/lib/ui';

<Button variant="glass" size="md">Glass Effect</Button>`,
      },
      {
        title: 'Gradient',
        code: `import { Button } from '@/lib/ui';

<Button variant="gradient" size="md">Gradient Animation</Button>`,
      },
    ],
    sizes: [
      {
        title: 'XS',
        code: `import { Button } from '@/lib/ui';

<Button variant="primary" size="xs">Extra Small</Button>`,
      },
      {
        title: 'SM',
        code: `import { Button } from '@/lib/ui';

<Button variant="primary" size="sm">Small</Button>`,
      },
      {
        title: 'MD',
        code: `import { Button } from '@/lib/ui';

<Button variant="primary" size="md">Medium</Button>`,
      },
      {
        title: 'LG',
        code: `import { Button } from '@/lib/ui';

<Button variant="primary" size="lg">Large</Button>`,
      },
      {
        title: 'XL',
        code: `import { Button } from '@/lib/ui';

<Button variant="primary" size="xl">Extra Large</Button>`,
      },
    ],
    icons: [
      {
        title: 'Left Icon',
        code: `import { Button } from '@/lib/ui';
import { Play } from 'lucide-react';

<Button variant="primary" leftIcon={<Play className="w-4 h-4" />}>
  Play Video
</Button>`,
      },
      {
        title: 'Right Icon',
        code: `import { Button } from '@/lib/ui';
import { Download } from 'lucide-react';

<Button variant="outline" rightIcon={<Download className="w-4 h-4" />}>
  Download
</Button>`,
      },
      {
        title: 'Both Sides',
        code: `import { Button } from '@/lib/ui';
import { Heart, Plus } from 'lucide-react';

<Button variant="secondary" leftIcon={<Heart className="w-4 h-4" />} rightIcon={<Plus className="w-4 h-4" />}>
  Add to Favorites
</Button>`,
      },
      {
        title: 'Special (Neon/Glass/Gradient)',
        code: `import { Button } from '@/lib/ui';
import { Settings, User, Heart } from 'lucide-react';

<Button variant="neon" leftIcon={<Settings className="w-4 h-4" />}>Neon Effect</Button>
<Button variant="glass" leftIcon={<User className="w-4 h-4" />}>Glass Effect</Button>
<Button variant="gradient" leftIcon={<Heart className="w-4 h-4" />}>Gradient Animation</Button>`,
      },
    ],
    loading: [
      {
        title: 'Primary (Loading)',
        code: `import { Button } from '@/lib/ui';

<Button variant="primary" loading>Submit Form</Button>`,
      },
      {
        title: 'Success (Loading)',
        code: `import { Button } from '@/lib/ui';

<Button variant="success" loading>Save Changes</Button>`,
      },
      {
        title: 'Danger (Loading)',
        code: `import { Button } from '@/lib/ui';

<Button variant="danger" loading>Delete Item</Button>`,
      },
      {
        title: 'Outline (Loading)',
        code: `import { Button } from '@/lib/ui';

<Button variant="outline" loading>Refresh</Button>`,
      },
    ],
    disabled: [
      {
        title: 'Primary (Disabled)',
        code: `import { Button } from '@/lib/ui';

<Button variant="primary" disabled>Primary</Button>`,
      },
      {
        title: 'Secondary (Disabled)',
        code: `import { Button } from '@/lib/ui';

<Button variant="secondary" disabled>Secondary</Button>`,
      },
      {
        title: 'Outline (Disabled)',
        code: `import { Button } from '@/lib/ui';

<Button variant="outline" disabled>Outline</Button>`,
      },
      {
        title: 'Ghost (Disabled)',
        code: `import { Button } from '@/lib/ui';

<Button variant="ghost" disabled>Ghost</Button>`,
      },
      {
        title: 'Danger (Disabled)',
        code: `import { Button } from '@/lib/ui';

<Button variant="danger" disabled>Danger</Button>`,
      },
    ],
  };

  // Build an index so we can copy by clicking the actual button without changing its look
  const codeIndex = useMemo(() => {
    const m = new Map<string, string>();
    codeRef.variants.forEach(v => m.set(`variant-${v.title.toLowerCase().split(' ')[0]}`, v.code.trim()));
    // sizes
    m.set('size-xs', codeRef.sizes.find(s => s.title === 'XS')!.code.trim());
    m.set('size-sm', codeRef.sizes.find(s => s.title === 'SM')!.code.trim());
    m.set('size-md', codeRef.sizes.find(s => s.title === 'MD')!.code.trim());
    m.set('size-lg', codeRef.sizes.find(s => s.title === 'LG')!.code.trim());
    m.set('size-xl', codeRef.sizes.find(s => s.title === 'XL')!.code.trim());
    // icons
    m.set('icon-left', codeRef.icons.find(i => i.title === 'Left Icon')!.code.trim());
    m.set('icon-right', codeRef.icons.find(i => i.title === 'Right Icon')!.code.trim());
    m.set('icon-both', codeRef.icons.find(i => i.title === 'Both Sides')!.code.trim());
    m.set('icon-special', codeRef.icons.find(i => i.title.startsWith('Special'))!.code.trim());
    // disabled
    m.set('disabled-primary', codeRef.disabled.find(d => d.title.startsWith('Primary'))!.code.trim());
    m.set('disabled-secondary', codeRef.disabled.find(d => d.title.startsWith('Secondary'))!.code.trim());
    m.set('disabled-outline', codeRef.disabled.find(d => d.title.startsWith('Outline'))!.code.trim());
    m.set('disabled-ghost', codeRef.disabled.find(d => d.title.startsWith('Ghost'))!.code.trim());
    m.set('disabled-danger', codeRef.disabled.find(d => d.title.startsWith('Danger'))!.code.trim());
    // effects mapped to variants
    m.set('variant-neon', codeRef.variants.find(v => v.title === 'Neon')!.code.trim());
    m.set('variant-glass', codeRef.variants.find(v => v.title === 'Glass')!.code.trim());
    m.set('variant-gradient', codeRef.variants.find(v => v.title === 'Gradient')!.code.trim());
    return m;
  }, []);

  const copyByKey = async (key: string) => {
    const code = codeIndex.get(key);
    if (!code) return;
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(code);
      }
      setCopiedKey(key);
      setTimeout(() => setCopiedKey(prev => (prev === key ? null : prev)), 1400);
    } catch {
      // no-op
    }
  };

  const CopiedTag = ({ show }: { show: boolean }) =>
    show ? (
      <span className="pointer-events-none absolute -top-2 -right-2 select-none rounded bg-emerald-600/90 px-2 py-0.5 text-[10px] font-medium text-white shadow">
        Copied!
      </span>
    ) : null;

  return (
    <div className="space-y-10">
      {/* Basic Variants */}
      <Card className="border-white/10 bg-black/30">
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>Button Variants</CardTitle>
            <p className="mt-1 text-xs text-muted-foreground">Click any button to copy its JSX</p>
          </div>
          <CopyCodeButton code={basicCode} />
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {variants.map((variant) => {
              const key = `variant-${variant.variant}`;
              return (
                <div key={variant.variant} className="flex flex-col items-center gap-2">
                  <div className="relative">
                    <Button
                      title="Click to copy code"
                      variant={variant.variant}
                      size="md"
                      onClick={() => copyByKey(key)}
                    >
                      {variant.name}
                    </Button>
                    <CopiedTag show={copiedKey === key} />
                  </div>
                  <span className="text-xs text-muted-foreground">{variant.variant}</span>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Sizes */}
      <Card className="border-white/10 bg-black/30">
        <CardHeader>
          <div>
            <CardTitle>Button Sizes</CardTitle>
            <p className="mt-1 text-xs text-muted-foreground">Click to copy size-specific JSX</p>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap items-end gap-4">
            {sizes.map((size) => {
              const key = `size-${size.size}`;
              return (
                <div key={size.size} className="flex flex-col items-center gap-2">
                  <div className="relative">
                    <Button
                      title="Click to copy code"
                      variant="primary"
                      size={size.size}
                      onClick={() => copyByKey(key)}
                    >
                      {size.name}
                    </Button>
                    <CopiedTag show={copiedKey === key} />
                  </div>
                  <span className="text-xs text-muted-foreground">{size.size}</span>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* With Icons */}
      <Card className="border-white/10 bg-black/30">
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>Buttons with Icons</CardTitle>
            <p className="mt-1 text-xs text-muted-foreground">Click any button to copy its JSX</p>
          </div>
          <CopyCodeButton code={withIconsCode} />
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative">
              <Button
                title="Click to copy code"
                variant="primary"
                leftIcon={<Play className="w-4 h-4" />}
                onClick={() => copyByKey('icon-left')}
              >
                Play Video
              </Button>
              <CopiedTag show={copiedKey === 'icon-left'} />
            </div>
            <div className="relative">
              <Button
                title="Click to copy code"
                variant="outline"
                rightIcon={<Download className="w-4 h-4" />}
                onClick={() => copyByKey('icon-right')}
              >
                Download
              </Button>
              <CopiedTag show={copiedKey === 'icon-right'} />
            </div>
            <div className="relative">
              <Button
                title="Click to copy code"
                variant="secondary"
                leftIcon={<Heart className="w-4 h-4" />}
                rightIcon={<Plus className="w-4 h-4" />}
                onClick={() => copyByKey('icon-both')}
              >
                Add to Favorites
              </Button>
              <CopiedTag show={copiedKey === 'icon-both'} />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Loading States */}
      <Card className="border-white/10 bg-black/30">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Loading States</CardTitle>
          <CopyCodeButton code={loadingCode} />
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="flex flex-col items-center gap-2">
              <Button
                variant="primary"
                loading={loadingStates.primary}
                onClick={() => handleLoadingDemo('primary')}
              >
                {loadingStates.primary ? 'Processing...' : 'Submit Form'}
              </Button>
              <CopyCodeButton code={codeRef.loading[0].code} />
            </div>
            <div className="flex flex-col items-center gap-2">
              <Button
                variant="success"
                loading={loadingStates.success}
                onClick={() => handleLoadingDemo('success')}
              >
                {loadingStates.success ? 'Saving...' : 'Save Changes'}
              </Button>
              <CopyCodeButton code={codeRef.loading[1].code} />
            </div>
            <div className="flex flex-col items-center gap-2">
              <Button
                variant="danger"
                loading={loadingStates.danger}
                onClick={() => handleLoadingDemo('danger')}
              >
                {loadingStates.danger ? 'Deleting...' : 'Delete Item'}
              </Button>
              <CopyCodeButton code={codeRef.loading[2].code} />
            </div>
            <div className="flex flex-col items-center gap-2">
              <Button
                variant="outline"
                loading={loadingStates.outline}
                onClick={() => handleLoadingDemo('outline')}
              >
                {loadingStates.outline ? 'Loading...' : 'Refresh'}
              </Button>
              <CopyCodeButton code={codeRef.loading[3].code} />
            </div>
          </div>
          <p className="mt-3 text-xs text-muted-foreground">Tip: Use the copy buttons below each example to get the loading snippet.</p>
        </CardContent>
      </Card>

      {/* Disabled States */}
      <Card className="border-white/10 bg-black/30">
        <CardHeader>
          <div>
            <CardTitle>Disabled States</CardTitle>
            <p className="mt-1 text-xs text-muted-foreground">Click a disabled button to copy its JSX</p>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {variants.slice(0, 5).map((variant) => {
              const key = `disabled-${variant.variant}`;
              return (
                <div key={variant.variant} className="relative flex flex-col items-center gap-2">
                  <div className="relative">
                    <Button
                      title="Click to copy code"
                      variant={variant.variant}
                      disabled
                      onClick={() => copyByKey(key)}
                    >
                      {variant.name}
                    </Button>
                    <CopiedTag show={copiedKey === key} />
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Special Effects */}
      <Card className="border-white/10 bg-gradient-to-br from-gray-950 to-gray-900">
        <CardHeader>
          <div>
            <CardTitle className="text-foreground">Special Effect Buttons</CardTitle>
            <p className="mt-1 text-xs text-muted-foreground">Click to copy JSX for special variants</p>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative">
              <Button
                title="Click to copy code"
                variant="neon"
                leftIcon={<Settings className="w-4 h-4" />}
                onClick={() => copyByKey('variant-neon')}
              >
                Neon Effect
              </Button>
              <CopiedTag show={copiedKey === 'variant-neon'} />
            </div>
            <div className="relative">
              <Button
                title="Click to copy code"
                variant="glass"
                leftIcon={<User className="w-4 h-4" />}
                onClick={() => copyByKey('variant-glass')}
              >
                Glass Effect
              </Button>
              <CopiedTag show={copiedKey === 'variant-glass'} />
            </div>
            <div className="relative">
              <Button
                title="Click to copy code"
                variant="gradient"
                leftIcon={<Heart className="w-4 h-4" />}
                onClick={() => copyByKey('variant-gradient')}
              >
                Gradient Animation
              </Button>
              <CopiedTag show={copiedKey === 'variant-gradient'} />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Code Reference: Copy snippets for each button shown above */}
      <Card className="border-white/10 bg-black/40">
        <CardHeader>
          <CardTitle>Code Reference (Copy any button’s code)</CardTitle>
        </CardHeader>
        <CardContent className="space-y-10">
          {/* Variants */}
          <section>
            <h4 className="mb-3 text-sm font-semibold text-foreground">Variants</h4>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
              {codeRef.variants.map(item => (
                <div key={item.title} className="overflow-hidden rounded-lg border border-white/10">
                  <div className="flex items-center justify-between border-b border-white/10 px-3 py-2">
                    <span className="text-xs text-muted-foreground">{item.title}</span>
                    <CopyCodeButton code={item.code} />
                  </div>
                  <pre className="overflow-x-auto bg-[#0b1120] p-3 text-xs text-gray-100">
                    <code>{item.code}</code>
                  </pre>
                </div>
              ))}
            </div>
          </section>

          {/* Sizes */}
          <section>
            <h4 className="mb-3 text-sm font-semibold text-foreground">Sizes</h4>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
              {codeRef.sizes.map(item => (
                <div key={item.title} className="overflow-hidden rounded-lg border border-white/10">
                  <div className="flex items-center justify-between border-b border-white/10 px-3 py-2">
                    <span className="text-xs text-muted-foreground">{item.title}</span>
                    <CopyCodeButton code={item.code} />
                  </div>
                  <pre className="overflow-x-auto bg-[#0b1120] p-3 text-xs text-gray-100">
                    <code>{item.code}</code>
                  </pre>
                </div>
              ))}
            </div>
          </section>

          {/* Icons */}
          <section>
            <h4 className="mb-3 text-sm font-semibold text-foreground">With Icons</h4>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
              {codeRef.icons.map(item => (
                <div key={item.title} className="overflow-hidden rounded-lg border border-white/10">
                  <div className="flex items-center justify-between border-b border-white/10 px-3 py-2">
                    <span className="text-xs text-muted-foreground">{item.title}</span>
                    <CopyCodeButton code={item.code} />
                  </div>
                  <pre className="overflow-x-auto bg-[#0b1120] p-3 text-xs text-gray-100">
                    <code>{item.code}</code>
                  </pre>
                </div>
              ))}
            </div>
          </section>

          {/* Loading */}
          <section>
            <h4 className="mb-3 text-sm font-semibold text-foreground">Loading States</h4>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
              {codeRef.loading.map(item => (
                <div key={item.title} className="overflow-hidden rounded-lg border border-white/10">
                  <div className="flex items-center justify-between border-b border-white/10 px-3 py-2">
                    <span className="text-xs text-muted-foreground">{item.title}</span>
                    <CopyCodeButton code={item.code} />
                  </div>
                  <pre className="overflow-x-auto bg-[#0b1120] p-3 text-xs text-gray-100">
                    <code>{item.code}</code>
                  </pre>
                </div>
              ))}
            </div>
          </section>

          {/* Disabled */}
          <section>
            <h4 className="mb-3 text-sm font-semibold text-foreground">Disabled States</h4>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
              {codeRef.disabled.map(item => (
                <div key={item.title} className="overflow-hidden rounded-lg border border-white/10">
                  <div className="flex items-center justify-between border-b border-white/10 px-3 py-2">
                    <span className="text-xs text-muted-foreground">{item.title}</span>
                    <CopyCodeButton code={item.code} />
                  </div>
                  <pre className="overflow-x-auto bg-[#0b1120] p-3 text-xs text-gray-100">
                    <code>{item.code}</code>
                  </pre>
                </div>
              ))}
            </div>
          </section>
        </CardContent>
      </Card>
    </div>
  );
};

export default ButtonShowcase;
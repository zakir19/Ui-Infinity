import React, { useState } from 'react';
import { Button } from '@/lib/ui';
import { CopyCodeButton } from '@/components/core/CopyCodeButton';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/core/Card';
import { Play, Download, Heart, Settings, User, Plus } from 'lucide-react';

const ButtonShowcase = () => {
  const [loadingStates, setLoadingStates] = useState<Record<string, boolean>>({});

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
import { Play, Download } from 'lucide-react';

<Button variant="primary" leftIcon={<Play className="w-4 h-4" />}>
  Play Video
</Button>

<Button variant="outline" rightIcon={<Download className="w-4 h-4" />}>
  Download
</Button>`;

  const loadingCode = `import { Button } from '@/lib/ui';

const [loading, setLoading] = useState(false);

<Button 
  variant="primary" 
  loading={loading}
  onClick={() => setLoading(true)}
>
  {loading ? 'Processing...' : 'Submit'}
</Button>`;

  return (
    <div className="space-y-8">
      {/* Basic Variants */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Button Variants</CardTitle>
          <CopyCodeButton code={basicCode} />
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {variants.map((variant) => (
              <div key={variant.variant} className="flex flex-col items-center gap-2">
                <Button variant={variant.variant} size="md">
                  {variant.name}
                </Button>
                <span className="text-xs text-muted-foreground">{variant.variant}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Sizes */}
      <Card>
        <CardHeader>
          <CardTitle>Button Sizes</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap items-end gap-4">
            {sizes.map((size) => (
              <div key={size.size} className="flex flex-col items-center gap-2">
                <Button variant="primary" size={size.size}>
                  {size.name}
                </Button>
                <span className="text-xs text-muted-foreground">{size.size}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* With Icons */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Buttons with Icons</CardTitle>
          <CopyCodeButton code={withIconsCode} />
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button variant="primary" leftIcon={<Play className="w-4 h-4" />}>
              Play Video
            </Button>
            <Button variant="outline" rightIcon={<Download className="w-4 h-4" />}>
              Download
            </Button>
            <Button variant="secondary" leftIcon={<Heart className="w-4 h-4" />} rightIcon={<Plus className="w-4 h-4" />}>
              Add to Favorites
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Loading States */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Loading States</CardTitle>
          <CopyCodeButton code={loadingCode} />
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Button 
              variant="primary" 
              loading={loadingStates.primary}
              onClick={() => handleLoadingDemo('primary')}
            >
              {loadingStates.primary ? 'Processing...' : 'Submit Form'}
            </Button>
            <Button 
              variant="success" 
              loading={loadingStates.success}
              onClick={() => handleLoadingDemo('success')}
            >
              {loadingStates.success ? 'Saving...' : 'Save Changes'}
            </Button>
            <Button 
              variant="danger" 
              loading={loadingStates.danger}
              onClick={() => handleLoadingDemo('danger')}
            >
              {loadingStates.danger ? 'Deleting...' : 'Delete Item'}
            </Button>
            <Button 
              variant="outline" 
              loading={loadingStates.outline}
              onClick={() => handleLoadingDemo('outline')}
            >
              {loadingStates.outline ? 'Loading...' : 'Refresh'}
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Disabled States */}
      <Card>
        <CardHeader>
          <CardTitle>Disabled States</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {variants.slice(0, 5).map((variant) => (
              <Button key={variant.variant} variant={variant.variant} disabled>
                {variant.name}
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Special Effects */}
      <Card className="bg-gradient-to-br from-gray-900 to-black">
        <CardHeader>
          <CardTitle className="text-white">Special Effect Buttons</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button variant="neon" leftIcon={<Settings className="w-4 h-4" />}>
              Neon Effect
            </Button>
            <Button variant="glass" leftIcon={<User className="w-4 h-4" />}>
              Glass Effect
            </Button>
            <Button variant="gradient" leftIcon={<Heart className="w-4 h-4" />}>
              Gradient Animation
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ButtonShowcase;
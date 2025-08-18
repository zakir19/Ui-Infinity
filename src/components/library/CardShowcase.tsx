import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/lib/ui/Card';
import { CopyCodeButton } from '@/components/core/CopyCodeButton';

const CardShowcase = () => {
  const cardCode = `import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/lib/ui/Card';

<Card variant="glass" size="md">
  <CardHeader>
    <CardTitle>Beautiful Card</CardTitle>
    <CardDescription>A stunning card component with glass morphism</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Content goes here...</p>
  </CardContent>
  <CardFooter>
    <button>Action</button>
  </CardFooter>
</Card>`;

  return (
    <div className="w-full h-full flex items-center justify-center group relative">
      <CopyCodeButton code={cardCode} className="opacity-0 group-hover:opacity-100" />
      <Card variant="glass" size="md" className="w-64">
        <CardHeader>
          <CardTitle>Beautiful Card</CardTitle>
          <CardDescription>Custom card library component</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm">This is our custom card component with multiple variants and beautiful styling.</p>
        </CardContent>
        <CardFooter>
          <button className="text-sm text-primary hover:underline">Learn More</button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default CardShowcase;